import { NextResponse } from 'next/server'
import path from 'path'
import * as fs from 'fs'

export async function GET() {
    const filePath = path.join(process.cwd(), 'src/settings/mock/pages.json')
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(fileContents))
}
