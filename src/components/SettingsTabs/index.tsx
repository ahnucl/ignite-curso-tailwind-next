'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab01')

  return (
    <Tabs.Root className="" value={currentTab} onValueChange={setCurrentTab}>
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
    </Tabs.Root>
  )
}
