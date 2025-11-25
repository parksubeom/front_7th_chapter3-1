import * as React from "react"
import { cn } from "@/lib/utils"

// -------------------------------------------------------------------------
// 1. Table Root
// -------------------------------------------------------------------------
interface TableProps extends React.ComponentProps<"table"> {
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
}

function Table({ className, striped, bordered, hover = true, ...props }: TableProps) {
  return (
    <div className="relative w-full overflow-x-auto table-container">
      <table
        className={cn(
          // Base: width 100%, border-collapse, font-size 0.875rem (14px), bg-white
          "w-full border-collapse text-[0.875rem] bg-white font-sans",
          
          // [Legacy Style: Striped]
          // .table-striped tbody tr:nth-child(even) { background-color: #fafafa; }
          striped && "[&_tbody_tr:nth-child(even)]:bg-[#fafafa]",
          
          // [Legacy Style: Bordered]
          // .table-bordered { border: 1px solid rgba(0, 0, 0, 0.12); }
          // .table-bordered th, .table-bordered td { border: 1px solid rgba(0, 0, 0, 0.12); }
          bordered && "border border-[rgba(0,0,0,0.12)] [&_th]:border [&_th]:border-[rgba(0,0,0,0.12)] [&_td]:border [&_td]:border-[rgba(0,0,0,0.12)]",
          
          className
        )}
        {...props}
      />
    </div>
  )
}

// -------------------------------------------------------------------------
// 2. Table Header (Thead)
// -------------------------------------------------------------------------
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead 
      // .table thead { background-color: #fafafa; }
      className={cn("bg-[#fafafa]", className)} 
      {...props} 
    />
  )
}

// -------------------------------------------------------------------------
// 3. Table Body (Tbody)
// -------------------------------------------------------------------------
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      // .table tbody tr:last-child td { border-bottom: none; }
      className={cn("[&_tr:last-child_td]:border-b-0", className)}
      {...props}
    />
  )
}

// -------------------------------------------------------------------------
// 4. Table Footer (Tfoot) - Optional (Standard Style)
// -------------------------------------------------------------------------
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

// -------------------------------------------------------------------------
// 5. Table Row (Tr)
// -------------------------------------------------------------------------
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "transition-colors data-[state=selected]:bg-muted",
        // .table-hover tbody tr:hover { background-color: rgba(0, 0, 0, 0.04); }
        // (hover prop은 Table 컴포넌트에서 제어하거나 기본 동작으로 둡니다. 여기선 기본 적용)
        "hover:bg-[rgba(0,0,0,0.04)]",
        className
      )}
      {...props}
    />
  )
}

// -------------------------------------------------------------------------
// 6. Table Head Cell (Th) - Legacy CSS Applied
// -------------------------------------------------------------------------
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        // padding: 16px
        "p-4",
        // text-align: left
        "text-left align-middle",
        // font-weight: 500
        "font-medium",
        // font-size: 0.75rem
        "text-[0.75rem]",
        // color: rgba(0, 0, 0, 0.6)
        "text-[rgba(0,0,0,0.6)]",
        // text-transform: uppercase
        "uppercase",
        // letter-spacing: 0.03em
        "tracking-[0.03em]",
        // border-bottom: 2px solid rgba(0, 0, 0, 0.12)
        "border-b-2 border-[rgba(0,0,0,0.12)]",
        
        // Checkbox alignment correction
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

// -------------------------------------------------------------------------
// 7. Table Data Cell (Td) - Legacy CSS Applied
// -------------------------------------------------------------------------
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn(
        // padding: 16px
        "p-4",
        "align-middle",
        // color: rgba(0, 0, 0, 0.87)
        "text-[rgba(0,0,0,0.87)]",
        // border-bottom: 1px solid rgba(0, 0, 0, 0.08)
        "border-b border-[rgba(0,0,0,0.08)]",
        
        // Checkbox alignment correction
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}