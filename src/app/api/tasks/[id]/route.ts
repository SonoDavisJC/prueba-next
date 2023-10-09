import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";


export async function GET(request: Request, {params}: Params) {

    const response = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json(response);
}

export async function PUT(request: Request, {params}: Params) {

    let {nombre, description} = await request.json();

    const response = await prisma.task.updateMany({
        where: {
            id: Number(params.id)
        },
        data: {
            nombre,
            description
        }
    })
    
    return NextResponse.json({
        message: "Succes Update"
    });
}

export async function DELETE(request: Request, {params}: Params) {
    const response = await prisma.task.delete({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json({
        message: "Succes Delete"
    });
}