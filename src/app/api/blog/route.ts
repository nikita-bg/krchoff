import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const GITHUB_REPO = process.env.GITHUB_REPO || "nikita-bg/krchoff";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const BLOG_API_KEY = process.env.BLOG_API_KEY!;

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== BLOG_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, slug, content, excerpt } = body;

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN not configured" },
      { status: 500 }
    );
  }

  if (!title || !slug || !content) {
    return NextResponse.json(
      { error: "Missing required fields: title, slug, content" },
      { status: 400 }
    );
  }

  const date = new Date().toISOString().split("T")[0];

  const markdown = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
excerpt: "${(excerpt || "").replace(/"/g, '\\"')}"
---

${content}
`;

  const filePath = `content/blog/${slug}.md`;
  const encoded = Buffer.from(markdown).toString("base64");

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Add blog post: ${title}`,
        content: encoded,
        branch: GITHUB_BRANCH,
      }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return NextResponse.json(
      { error: "GitHub API error", details: error },
      { status: 500 }
    );
  }

  const result = await res.json();

  return NextResponse.json({
    success: true,
    url: `https://krchoff.com/blog/${slug}`,
    commit: result.commit?.sha,
  });
}
