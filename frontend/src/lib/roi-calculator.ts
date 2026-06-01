export interface ROIInputs {
  initialInvestment: number
  monthlyRevenue: number
  monthlyCosts: number
  occupancyRate: number // 0–1
  discountRate: number // annual, 0–1
  years: number
}

export interface ROIOutputs {
  monthlyEBITDA: number
  annualEBITDA: number
  paybackMonths: number
  roi12months: number
  roi24months: number
  roi60months: number
  npv: number
  irr: number | null
  cashflowByMonth: { month: number; cumulative: number; monthly: number }[]
}

export function calculateROI(inputs: ROIInputs): ROIOutputs {
  const { initialInvestment, monthlyRevenue, monthlyCosts, occupancyRate, discountRate, years } =
    inputs

  const effectiveRevenue = monthlyRevenue * occupancyRate
  const monthlyEBITDA = effectiveRevenue - monthlyCosts
  const annualEBITDA = monthlyEBITDA * 12

  // Payback period
  const paybackMonths = monthlyEBITDA > 0 ? Math.ceil(initialInvestment / monthlyEBITDA) : Infinity

  // Simple ROI at specific horizons
  const roi = (months: number) => {
    const gained = monthlyEBITDA * months
    return ((gained - initialInvestment) / initialInvestment) * 100
  }

  // Monthly cashflow curve
  const totalMonths = years * 12
  const cashflowByMonth = Array.from({ length: totalMonths }, (_, i) => {
    const month = i + 1
    const cumulative = monthlyEBITDA * month - initialInvestment
    return { month, cumulative, monthly: monthlyEBITDA }
  })

  // NPV (monthly discount rate)
  const monthlyDiscount = discountRate / 12
  let npv = -initialInvestment
  for (let m = 1; m <= totalMonths; m++) {
    npv += monthlyEBITDA / (1 + monthlyDiscount) ** m
  }

  // IRR approximation via bisection
  let irr: number | null = null
  if (monthlyEBITDA > 0) {
    let lo = -0.999,
      hi = 10
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2
      let pv = -initialInvestment
      for (let m = 1; m <= totalMonths; m++) {
        pv += monthlyEBITDA / (1 + mid) ** m
      }
      if (pv > 0) lo = mid
      else hi = mid
    }
    irr = ((1 + (lo + hi) / 2) ** 12 - 1) * 100 // annualized %
  }

  return {
    monthlyEBITDA,
    annualEBITDA,
    paybackMonths,
    roi12months: roi(12),
    roi24months: roi(24),
    roi60months: roi(60),
    npv,
    irr,
    cashflowByMonth,
  }
}

