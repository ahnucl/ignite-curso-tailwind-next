'use client'

import * as SelectPrimite from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

// interface SelectProps {}

export function Select() {
  return (
    <SelectPrimite.Root>
      <SelectPrimite.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimite.Value
          className="text-black"
          placeholder="Select a country..."
        />
        <SelectPrimite.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimite.Icon>
      </SelectPrimite.Trigger>

      <SelectPrimite.Portal>
        <SelectPrimite.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimite.Viewport>
            <SelectPrimite.Item
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
              value="br"
            >
              <SelectPrimite.ItemText className="text-black">
                Brazil
              </SelectPrimite.ItemText>

              <SelectPrimite.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimite.ItemIndicator>
            </SelectPrimite.Item>

            <SelectPrimite.Item
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
              value="us"
            >
              <SelectPrimite.ItemText className="text-black">
                United States
              </SelectPrimite.ItemText>

              <SelectPrimite.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimite.ItemIndicator>
            </SelectPrimite.Item>
          </SelectPrimite.Viewport>
        </SelectPrimite.Content>
      </SelectPrimite.Portal>
    </SelectPrimite.Root>
  )
}
