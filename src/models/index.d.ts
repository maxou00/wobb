import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Deliverable {
  DEDICATED_VIDEO = "DEDICATED_VIDEO",
  INTEGRATED_VIDEO = "INTEGRATED_VIDEO",
  SHORT = "SHORT",
  REEL = "REEL",
  SWIPE_UP_STORY = "SWIPE_UP_STORY",
  IGTV = "IGTV",
  STATIC_POST = "STATIC_POST",
  VIDEO_POST = "VIDEO_POST",
  CONTENT_ONLY = "CONTENT_ONLY"
}

export enum JobStatus {
  SHORT_LISTED = "SHORT_LISTED",
  HIRED = "HIRED",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED"
}

export enum PayoutType {
  BARTER = "BARTER",
  VARIABLE = "VARIABLE",
  FIXED = "FIXED"
}

export enum TaskStatus {
  TOBECOMPLETED = "TOBECOMPLETED",
  COMPLETED = "COMPLETED",
  ONGOING = "ONGOING"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS"
}

export enum Platform {
  YOUTUBE = "YOUTUBE",
  INSTAGRAM = "INSTAGRAM"
}

export enum CampaignStatus {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  PUBLISHED = "PUBLISHED",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED"
}



type CampaignBriefMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BrandMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InstagramMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CampaignBrief {
  readonly id: string;
  readonly deliverableType?: Deliverable | keyof typeof Deliverable;
  readonly brief?: string;
  readonly dueDate?: string;
  readonly campaignId?: string;
  readonly lastUpdate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CampaignBrief, CampaignBriefMetaData>);
  static copyOf(source: CampaignBrief, mutator: (draft: MutableModel<CampaignBrief, CampaignBriefMetaData>) => MutableModel<CampaignBrief, CampaignBriefMetaData> | void): CampaignBrief;
}

export declare class Brand {
  readonly id: string;
  readonly name?: string;
  readonly website?: string;
  readonly uid?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Brand, BrandMetaData>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand, BrandMetaData>) => MutableModel<Brand, BrandMetaData> | void): Brand;
}

export declare class Task {
  readonly id: string;
  readonly Title?: string;
  readonly deliverableType: Deliverable | keyof typeof Deliverable;
  readonly Status: TaskStatus | keyof typeof TaskStatus;
  readonly jobsID?: string;
  readonly Brief?: string;
  readonly sharedID?: string;
  readonly acceptedAt?: string;
  readonly lastUpdate?: string;
  readonly completedAt?: string;
  readonly dueDate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class Jobs {
  readonly id: string;
  readonly campaignID?: string;
  readonly Infleuncer?: User;
  readonly Tasks?: (Task | null)[];
  readonly uid?: string;
  readonly bidPrice?: number;
  readonly bidCurrency?: string;
  readonly status?: JobStatus | keyof typeof JobStatus;
  readonly completedAt?: string;
  readonly hiredAt?: string;
  readonly appliedAt?: string;
  readonly shortlistedAt?: string;
  readonly rejectedAt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Jobs, JobsMetaData>);
  static copyOf(source: Jobs, mutator: (draft: MutableModel<Jobs, JobsMetaData>) => MutableModel<Jobs, JobsMetaData> | void): Jobs;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly imageUrl?: string;
  readonly status?: string;
  readonly Messages?: (Message | null)[];
  readonly chatrooms?: (ChatRoomUser | null)[];
  readonly campaigns?: (CampaignUser | null)[];
  readonly uid?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Message {
  readonly id: string;
  readonly content?: string;
  readonly userID?: string;
  readonly chatroomID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class ChatRoomUser {
  readonly id: string;
  readonly chatroom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatRoomUser, ChatRoomUserMetaData>);
  static copyOf(source: ChatRoomUser, mutator: (draft: MutableModel<ChatRoomUser, ChatRoomUserMetaData>) => MutableModel<ChatRoomUser, ChatRoomUserMetaData> | void): ChatRoomUser;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number;
  readonly lastMessage?: Message;
  readonly Messages?: (Message | null)[];
  readonly ChatRoomUsers?: (ChatRoomUser | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

export declare class CampaignUser {
  readonly id: string;
  readonly campaign: Campaign;
  readonly user: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CampaignUser, CampaignUserMetaData>);
  static copyOf(source: CampaignUser, mutator: (draft: MutableModel<CampaignUser, CampaignUserMetaData>) => MutableModel<CampaignUser, CampaignUserMetaData> | void): CampaignUser;
}

export declare class Campaign {
  readonly id: string;
  readonly Name: string;
  readonly Goals?: string;
  readonly minAge?: number;
  readonly maxAge?: number;
  readonly Language?: string;
  readonly Gender?: Gender | keyof typeof Gender;
  readonly Platform: Platform | keyof typeof Platform;
  readonly CampaignUsers?: (CampaignUser | null)[];
  readonly CampaignStatus: CampaignStatus | keyof typeof CampaignStatus;
  readonly NoofInfleuncer?: number;
  readonly Jobs?: (Jobs | null)[];
  readonly Location?: string;
  readonly FollowerRanges?: string[];
  readonly Payout: string;
  readonly Categories?: (string | null)[];
  readonly Brand?: Brand;
  readonly Deliverables?: string[];
  readonly uid: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Campaign, CampaignMetaData>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign, CampaignMetaData>) => MutableModel<Campaign, CampaignMetaData> | void): Campaign;
}

export declare class Profile {
  readonly id: string;
  readonly name?: string;
  readonly username?: string;
  readonly website?: string;
  readonly Email?: string;
  readonly PhoneNo?: string;
  readonly Gender?: Gender | keyof typeof Gender;
  readonly DoB?: string;
  readonly Language?: string;
  readonly Interest?: string;
  readonly Instagrams?: (Instagram | null)[];
  readonly bio?: string;
  readonly uid?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class Instagram {
  readonly id: string;
  readonly Username?: string;
  readonly Token?: string;
  readonly Reach?: string;
  readonly Engagement?: string;
  readonly profileID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Instagram, InstagramMetaData>);
  static copyOf(source: Instagram, mutator: (draft: MutableModel<Instagram, InstagramMetaData>) => MutableModel<Instagram, InstagramMetaData> | void): Instagram;
}