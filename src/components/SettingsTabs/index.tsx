'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab01')

  return (
    <Tabs.Root className="" value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              value="tab01"
              title="My details"
              isSelected={currentTab === 'tab01'}
            />
            <TabItem
              value="tab02"
              title="Profile"
              isSelected={currentTab === 'tab02'}
            />
            <TabItem
              value="tab03"
              title="Password"
              isSelected={currentTab === 'tab03'}
            />
            <TabItem
              value="tab04"
              title="Team"
              isSelected={currentTab === 'tab04'}
            />
            <TabItem
              value="tab05"
              title="Plan"
              isSelected={currentTab === 'tab05'}
            />
            <TabItem
              value="tab06"
              title="Billing"
              isSelected={currentTab === 'tab06'}
            />
            <TabItem
              value="tab07"
              title="Email"
              isSelected={currentTab === 'tab07'}
            />
            <TabItem
              value="tab08"
              title="Notifications"
              isSelected={currentTab === 'tab08'}
            />
            <TabItem
              value="tab09"
              title="Integration"
              isSelected={currentTab === 'tab09'}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={currentTab === 'tab10'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
