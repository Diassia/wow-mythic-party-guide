#!/usr/bin/env bash

CLIENT_ID="1adb78a2e60947ebaed3a4d8325dacb8"
CIENT_SECRET="8fZ4r54BM1vFMfIESrXmbDz1ajePfyqX"
AUTH_URI="https://oauth.battle.net/authorize"
TOKEN_URI="https://oauth.battle.net/token"
API_URL="https://us.api.blizzard.com/profile/user/wow"
URL_EXAMPLE="https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=EUxQmtUt1gphpA5POWwRZ2frJL0INT0RYZ"
NAMESPACE=profile-eu
LOCALE=en_EU
TOKEN=EU4AcvLYtLJ45XXUGrmGI7SYsG2Pa7KJGi

# for getting a token
curl -u $CLIENT_ID:$CIENT_SECRET \
-d grant_type=client_credentials \
-d scope=wow.profile \
https://oauth.battle.net/token

# for getting the profile summary
# NAMESPACE="profile-eu" LOCALE="en_EU" TOKEN="EU4AcvLYtLJ45XXUGrmGI7SYsG2Pa7KJGi" curl https://eu.api.blizzard.com/profile/user/wow?namespace=$NAMESPACE&locale=$LOCALE&access_token=$TOKEN
# curl -i "https://eu.api.blizzard.com/profile/user/wow?namespace=$NAMESPACE&locale=$LOCALE&access_token=$TOKEN"
# https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=EU4AcvLYtLJ45XXUGrmGI7SYsG2Pa7KJGi
# https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_EU&access_token=EUBOjndmwJx00zgqabM0ARYfJzDcyDBTLm