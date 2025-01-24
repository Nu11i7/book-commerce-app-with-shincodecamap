import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId =  await params.userId;

  try {
    const purchase = await prisma.purchase.findMany({
      where: { userId: userId },
    });

    return NextResponse.json(purchase);
  } catch (err) {
    return NextResponse.json(err);
  }
}