-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);