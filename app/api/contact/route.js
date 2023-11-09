import { db } from "@/db/db";
import Portfolio_Form from "@/models/Portfolio_Form";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await db();
        const {name, email, message} = await req.json()
        // console.log(name, email, message);
        const product_doc = await Portfolio_Form.create({name, email, message});
        // console.log(product_doc);
        return NextResponse.json(
            {
                message: "Message Sent",
            },
            { status: 200 }
        )
    }
    catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}