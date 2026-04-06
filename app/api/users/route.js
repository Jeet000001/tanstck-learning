import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Jeet Paul", email: "jeet@gmail.com" },
  { id: 2, name: "Saheli Paul", email: "saheli@gmail.com" },
  { id: 3, name: "Saikat Ghosh", email: "saikat@gmail.com" },
];

// get endpoint
export const GET = async () => {
  try {
    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch users",
      },
      { status: 500 },
    );
  }
};

// post endpoint
export const POST = async (req) => {
  try {
    const body = await req.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 },
      );
    }

    const newUser = {
      id: Date.now(),
      name: body.name,
      email: body.email,
    };

    users.push(newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Failed to create user", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
