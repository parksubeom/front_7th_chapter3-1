import * as React from "react"
import { cn } from "@/lib/utils"

// 1. Table Root에 스타일 Props 추가
interface TableProps extends React.ComponentProps<"table"> {
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean; // Shadcn 기본은 hover가 있지만, 명시적 제어를 위해 추가
}

function Table({ className, striped, bordered, hover = true, ...props }: TableProps) {
  return (
    <div className="relative w-full overflow-x-auto">
      <table
        className={cn(
          "w-full caption-bottom text-sm",
          // [BDS Style Extensions]
          striped && "[&_tbody_tr:nth-child(even)]:bg-muted/50", // 줄무늬
          bordered && "border-collapse border border-border [&_td]:border [&_td]:border-border [&_th]:border [&_th]:border-border", // 테두리
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead className={cn("[&_tr]:border-b", className)} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

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

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
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