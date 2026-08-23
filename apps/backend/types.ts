import z from "zod"

export const preInterviewReady = z.object({
    linkedIn: z.string(),
    github: z.string()
})