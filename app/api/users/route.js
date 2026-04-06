import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Jeet Paul", email: "jeet@gmail.com" },
  { id: 2, name: "Saheli Paul", email: "saheli@gmail.com" },
  { id: 3, name: "Saikat Ghosh", email: "saikat@gmail.com" },
];

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

