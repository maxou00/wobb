# Changes List applied to the provided schema.

Note: Everytime you will see a property named `uid` remember it means `user identifier`. I will use specially that name to track user on entities. It It links to the user's __sub__ property in the user pool pf the project. `sub` is based on uuid and is unique, non-reassignable. Also, composite properties formatted as JSON as stored as AWSJson (stringified).

Renamed every `Infleuncer(s)` to `Influencer(s)`

### Entity `Profile`
    - added `uid`.
    - added `bio` property.

### Entity `Brand`
    - `name`: brand name
    - `website`: brand website
    - `uid`: user

### Entity `Campaign`
    - `Categories`: *string* array containing selected categories forthis campaign
    - `FollowerRanges`: *AWSJson* array containing properties of selected ranges.
    - `Payout`: *AWSJson* containing payout specified for this campaign.
    - 'Deliverables`: AWSJson array containing deliverables codes with their count.
    - `Brand`: the brand author of this campaign
    - `Gender`: a Gender specification for this campaign
    - `uid`: user

### enum `Deliverable`
    - `DEDICATED_VIDEO`
    - `INTEGRATED VIDEO`
    - `SHORT`
    - `REEL`
    - `SWIPE_UP_STORY`
    - `IGTV`
    - `STATIC_POST`
    - `VIDEO_POST`
    - `CONTENT_ONLY`

### enum `PayoutType`
    - `BARTER`
    - `VARIABLE`
    - `FIXED`

### enum `JobStatus`
    - `SHORT_LISTED`
    - `HIRED`
    - `ONGOING`
    - `COMPLETED`
    - `REJECTED` to keep track of jobs applications that have been rejected.

### Entity `Jobs` have been renamed to `Job`
    - `uid` of the influencer linked to this job.
    - `status`: JobStatus
    - `Influencer`: 1:1 relationship with `User`
    - `appliedAt`: AWSDatetime indicating when the user applied for this campaign
    - `shortlistedAt`: AWSDatetime indicating when this application has been shortlisted
    - `hiredAt`: AWSDatetime indicating when this user has been hired for the campaign
    - `completedAt`: AWSDatetime indicating when this user has completed this Job.
    - `rejectedAt`: AWSDatetime indicating when this user application has been rejected.
    - `bidPrice` bid price submitted by this influencer
    - `bidCurrency` currency of the bid price
