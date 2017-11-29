# MyPhuot
My Project training react native
- use:
+ firebase realtime database
+ react native
+ redux
+ react navigation


* Because the library: react-native-facebook-login not implement function logout with clear accesstoken. So when you clone project and npm install you should go
to => nodemodules=>react-native-facebook-login=>android=>src=>main=>java...=>FacebookLoginModule.java
Find method logout and replace with code below:

@ReactMethod
    public void logout(final Callback callback) {
        final WritableMap map = Arguments.createMap();

        mTokenCallback = callback;




        if (AccessToken.getCurrentAccessToken() == null) {
            // already logged out
            map.putString("message", "Facebook Logout executed");
            map.putString("eventName", "onLogout");
            consumeCallback(CALLBACK_TYPE_SUCCESS, map);

            return;
        }

        new GraphRequest(AccessToken.getCurrentAccessToken(), "/me/permissions/", null, HttpMethod.DELETE, new GraphRequest
                .Callback() {

            @Override
            public void onCompleted(GraphResponse graphResponse) {
                LoginManager.getInstance().logOut();
                map.putString("message", "Facebook Logout executed");
                map.putString("eventName", "onLogout");
                consumeCallback(CALLBACK_TYPE_SUCCESS, map);

            }
        }).executeAsync();

    }

Note: for exactly auto implement you should open project by Android studio and replace this.
