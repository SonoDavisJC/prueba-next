import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {

    const response = await prisma.task.findMany()
    
    return NextResponse.json(response);
}

export async function POST(request: Request) {
    const {nombre, description} = await request.json();

    const newTask = await prisma.task.create({
        data:{
            nombre,
            description
        }
    })


    const response = await prisma.task.findMany()
    return NextResponse.json(response);
}