import React, { ComponentType } from "react";
import { Tab as HeadlessTab } from "@headlessui/react";
import classNames from "classnames";

type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;
type WithChildren<T> = T & { children: React.ReactNode };

export type TabProps = {
  children: React.ReactNode;
  subTitle?: String;
  subTitleClassName?: String;
  icon?: React.ReactNode;
  unreadAmount?: Number;
  showUnreadAmount?: boolean;
  className?: String;
  disabled?: boolean;
  currentIndex?: Number;
  totalTabs?: Number;
  indicatorColor?: String;
} & ExtractProps<typeof HeadlessTab>;
type GroupProps = WithChildren<ExtractProps<typeof HeadlessTab.Group>>;
type ListProps = WithChildren<ExtractProps<typeof HeadlessTab.List>>;
type PanelsProps = WithChildren<ExtractProps<typeof HeadlessTab.Panels>>;
type PanelProps = WithChildren<ExtractProps<typeof HeadlessTab.Panel>>;

type GroupComponent = React.FC<GroupProps>;
type ListComponet = React.FC<ListProps>;
type PanelsComponent = React.FC<PanelsProps>;
type PanelComponent = React.FC<PanelProps>;

type TabComponent = React.FC<TabProps> & { Group: GroupComponent } & {
  List: ListComponet;
} & { Panels: PanelsComponent } & { Panel: PanelComponent };

// @ts-ignore
export const Tab: TabComponent = ({
  children,
  className,
  disabled,
  indicatorColor = "P300",
}) => {
  return (
    <HeadlessTab
      disabled={disabled}
      className={({ selected }) =>
        classNames(
          className,
          "relative w-full px-3 font-semibold text-center cursor-pointer",
          {
            [`md:border-b${indicatorColor} border-b-1 md:border-b-2`]: selected,
            "text-N100": !selected && disabled,
          }
        )
      }
    >
      AAA
    </HeadlessTab>
  );
};
