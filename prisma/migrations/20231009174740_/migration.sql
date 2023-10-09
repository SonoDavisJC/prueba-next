-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
