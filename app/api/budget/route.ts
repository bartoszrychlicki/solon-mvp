import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET() {
  const userId = '00000000-0000-0000-0000-000000000000'; //  ← zastąp Clerk userId

  // 1) pobierz income & fixed
  const { data: user } = await supabase
    .from('users')
    .select('monthly_net_income,fixed_costs')
    .eq('id', userId)
    .single();

  // 2) wywołaj funkcję SQL
  const { data: spend } = await supabase
    .rpc('get_monthly_spend', { uid: userId })
    .single();

  // 3) oblicz free cash i limit dzienny
  const daysInMonth   = new Date().daysInMonth ?? 30; // helper
  const today         = new Date().getDate();
  const daysPassed    = today;
  const freeCashTotal = (user.monthly_net_income - user.fixed_costs) - spend;
  const dailyLimit    = freeCashTotal > 0
      ? freeCashTotal / (daysInMonth - daysPassed + 1)
      : 0;

  return NextResponse.json({
    monthSpend: spend,
    dailyLimit: Math.round(dailyLimit * 100) / 100
  });
}