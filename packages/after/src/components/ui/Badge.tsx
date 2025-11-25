import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // [Primary] #1976d2
        primary: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        
        // [Secondary] #757575 (Legacy Badge Secondary)
        // 시스템 secondary(#f5f5f5)가 아니라 badge 전용 secondary(#757575)를 사용합니다.
        secondary: "border-transparent bg-gray-solid text-white hover:bg-gray-solid/80",
        
        // [Danger] #d32f2f (Destructive alias)
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        danger: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        
        // [Success] #388e3c
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        
        // [Warning] #f57c00
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        
        // [Info] #0288d1
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        
        outline: "text-foreground",
      },
      size: {
        sm: "h-4 px-1 text-[10px]",
        md: "h-5 px-2 text-xs",
        lg: "h-6 px-3 text-sm",
      },
      pill: {
        true: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, pill, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, pill }), className)} {...props} />
  )
}

export { Badge, badgeVariants }