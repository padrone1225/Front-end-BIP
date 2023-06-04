import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { CategoriesItem } from "../models/item/item";
import {
  ConversationItem,
  ParticipantItem,
} from "../models/messages/conversation";
import { MessageResponse } from "../models/messages/message";
import { AccountFlags, NewUser, Plans, UserRoles } from "../models/user/user";
import actions from "../actions";

export interface StoreState {
  email: string;
  name_first: string;
  name_last: string;
  brands_represented: string[];
  brand_categories: string[];
  account_flags: AccountFlags[];
  account_flags_operating_user: AccountFlags[];
  plan?: Plans;
  company_name: string;
  business_years: number;
  verified_user: boolean;
  roles: UserRoles[];
  territories: string[];
  uuid: string;
  uuid_operating_user: string;
  notifications: MessageResponse[];
  chat: {
    participants: ParticipantItem[];
    conversations: ConversationItem[];
    messages: { [key: string]: MessageResponse[] };
    activeConversation: string;
  };
}
// export interface StoreState {
//   categories_licensee:
//     | [
//         {
//           category_name: string;
//           products: [
//             {
//               product_name: string;
//             }
//           ];
//         }
//       ]
//     | [];
//   categories_licensee_core: CategoriesItem[];
//   categories: CategoriesItem[];
//   current_licenses: string[];
//   top_5_customers: string[];
//   annual_wholesale_volume: string | number[];
//   active_licensees: string | number[];
//   access_token: string;

//   properties: any[];
//   userUUID: string;

//   actingAsNewUser: boolean;

//   // Dependencies
//   chatStoragePopulated: boolean;
//   userPopulated: boolean;
//   current_page: string;
//   company: string | undefined | null;
//   userCurrentType: "licensor" | "collaboration" | "agency";

//   company_logo: { uri: string };
//   distribution_channels: string[];
//   publicly_visible: string[];

//   refreshUser: boolean;
//   refreshUserAppWrapper: boolean;

//   navbarSearchText: string;

//   primaryUserUUID: string;
//   primaryUserFirstName: string;
//   primaryUserLastName: string;

//   logIn: boolean;

//   addAccountFlag: (accountFlag: AccountFlags) => void;
//   updateDueDiligenceModalOpen: (open: boolean) => void;
//   updateDueDiligenceCongratsModalOpen: (open: boolean) => void;
//   updatePlansModalOpen: (open: boolean) => void;
//   addConversations: (conversations: ConversationItem[]) => void;
//   addParticipants: (participants: ParticipantItem[]) => void;
//   addMessages: (conversationUuid: string, messages: MessageResponse[]) => void;
//   updateMessageStatus: (
//     conversationUuid: string,
//     index: number,
//     read: boolean
//   ) => void;
//   updateConversationUnreadCount: (uuid: string, unreadCount: number) => void;
//   updateActiveConversation: (uuid: string) => void;
//   resetChat: () => void;
//   addNotifications: (messages: MessageResponse[]) => void;
//   updateNotificationStatus: (index: string, read: boolean) => void;
//   updateNewUser: (newUser?: NewUser) => void;
//   reset: () => void;
//   loggingOut: boolean;

//   run: boolean;
//   stepIndex: number;
//   steps: any;
//   tourActive: boolean;
//   tourCompleted: boolean;
//   isDueDiligenceModalOpen: boolean;
//   isDueDiligenceCongratsModalOpen: boolean;
//   isPlansModalOpen: boolean;
//   newUser?: NewUser;
// }

//@ts-ignore
const initialState: StoreState = {
  email: "",
  name_first: "",
  name_last: "",
  brands_represented: [],
  brand_categories: [],
  account_flags: [],
  account_flags_operating_user: [],
  company_name: "",
  business_years: 0,
  verified_user: false,
  roles: [],
  territories: [],
  uuid: "",
  uuid_operating_user: "",
  notifications: [],
  chat: {
    participants: [],
    conversations: [],
    messages: {},
    activeConversation: "",
  },
};
// const initialState: StoreState = {
//   // LICENSEE && LICENSOR
//   categories: [],
//   categories_licensee: [],
//   categories_licensee_core: [],
//   // LICENSOR
//   active_licensees: "",
//   // LICENSEE
//   current_licenses: [],
//   // LICENSEE
//   top_5_customers: [],
//   // ANNUAL WHOLESALE VOLUME
//   annual_wholesale_volume: "",

//   account_flags: [],
//   account_flags_operating_user: [],
//   territories: [],
//   access_token: "",

//   properties: [],
//   userUUID: "",
//   company: null,
//   chatStoragePopulated: false,
//   userPopulated: false,
//   current_page: "",
//   userCurrentType: "licensor",
//   company_logo: { uri: "" },
//   distribution_channels: [],
//   publicly_visible: [],
//   actingAsNewUser: false,
//   refreshUser: true,
//   refreshUserAppWrapper: true,
//   loggingOut: false,

//   navbarSearchText: "",
//   logIn: false,
//   run: false,
//   stepIndex: 0,
//   steps: [],
//   tourActive: false,
//   tourCompleted: false,
//   isDueDiligenceModalOpen: false,
//   isDueDiligenceCongratsModalOpen: false,
//   isPlansModalOpen: false,

//   primaryUserUUID: "",
//   primaryUserFirstName: "",
//   primaryUserLastName: "",
// };

const useStore = create<StoreState>((set) => actions(set, initialState));

// @ts-ignore
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}

export default useStore;
