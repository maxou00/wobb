# Changes List applied to the provided schema.

###### Note: Everytime you will see a property named `uid` remember it means `user identifier`. I will use specially that name to track user on entities. It It links to the user's __sub__ property in the user pool pf the project. `sub` is based on uuid and is unique, non-reassignable.

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

### Relation `BrandedCampaign`
    Links a campaign to a specified brand. 
    - campaign: the campaign
    - brand: the brand author of this campaign
    
### `Deliverable` enum
    - `DEDICATED_VIDEO`
    - `INTEGRATED VIDEO`
    - `SHORT`
    - `REEL`
    - `SWIPE_UP_STORY`
    - `IGTV`
    - `STATIC_POST`
    - `VIDEO_POST`
    - `CONTENT_ONLY`

### `PayoutType` enum
    - `BARTER`
    - `VARIABLE`
    - `FIXED`