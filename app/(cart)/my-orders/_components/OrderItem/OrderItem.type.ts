import { DivProps } from "@/_src/shared/types";
import { DisclosureProps } from "@headlessui/react";

export type OrderProps = DisclosureProps & Omit<DivProps, "ref">;
