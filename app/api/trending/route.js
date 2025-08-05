import { NextResponse } from "next/server";

export async function GET() {
  const userData = {
    "trending": [
    {
      "category": "Sports · Trending",
      "hashtag": "#OvalTest",
      "posts": "16.5K"
    },
    {
      "category": "Entertainment · Trending",
      "hashtag": "#StrangerThings",
      "posts": "58.2K"
    },
    {
      "category": "Politics · Trending",
      "hashtag": "#Election2025",
      "posts": "72.1K"
    },
    {
      "category": "Technology · Trending",
      "hashtag": "#iPhone17",
      "posts": "34.9K"
    },
    
  ]
}
  

  return NextResponse.json(userData);
}