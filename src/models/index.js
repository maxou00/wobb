// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const JobStatus = {
  "SHORT_LISTED": "SHORT_LISTED",
  "HIRED": "HIRED",
  "ONGOING": "ONGOING",
  "COMPLETED": "COMPLETED",
  "REJECTED": "REJECTED"
};

const PayoutType = {
  "BARTER": "BARTER",
  "VARIABLE": "VARIABLE",
  "FIXED": "FIXED"
};

const Deliverable = {
  "DEDICATED_VIDEO": "DEDICATED_VIDEO",
  "INTEGRATED_VIDEO": "INTEGRATED_VIDEO",
  "SHORT": "SHORT",
  "REEL": "REEL",
  "SWIPE_UP_STORY": "SWIPE_UP_STORY",
  "IGTV": "IGTV",
  "STATIC_POST": "STATIC_POST",
  "VIDEO_POST": "VIDEO_POST",
  "CONTENT_ONLY": "CONTENT_ONLY"
};

const TaskStatus = {
  "TOBECOMPLETED": "TOBECOMPLETED",
  "COMPLETED": "COMPLETED",
  "ONGOING": "ONGOING"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHERS": "OTHERS"
};

const Platform = {
  "YOUTUBE": "YOUTUBE",
  "INSTAGRAM": "INSTAGRAM"
};

const CampaignStatus = {
  "DRAFT": "DRAFT",
  "SUBMITTED": "SUBMITTED",
  "PUBLISHED": "PUBLISHED",
  "ONGOING": "ONGOING",
  "COMPLETED": "COMPLETED"
};

const { Brand, Task, Jobs, User, Message, ChatRoomUser, ChatRoom, CampaignUser, Campaign, Profile, Instagram } = initSchema(schema);

export {
  Brand,
  Task,
  Jobs,
  User,
  Message,
  ChatRoomUser,
  ChatRoom,
  CampaignUser,
  Campaign,
  Profile,
  Instagram,
  JobStatus,
  PayoutType,
  Deliverable,
  TaskStatus,
  Gender,
  Platform,
  CampaignStatus
};