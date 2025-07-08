import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('spends')
    .select('id');

  if (error) return NextResponse.json({ ok: false, error }, { status: 500 });

  return NextResponse.json({ ok: true, rows: data.length });
}