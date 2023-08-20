'use client'

export function GoogleSigninButton() {
  return (
    <>
      <div id="g_id_onload"
        data-client_id="842785544896-0c6u8713dnt6ogbfg8m9iqidtkdtiv8o.apps.googleusercontent.com"
        data-context="use"
        data-ux_mode="popup"
        data-login_uri="http://localhost:3000/api/google-login-callback"
        data-auto_select="true"
        data-itp_support="true">
      </div>

      <div className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left">
      </div>
    </>
  )
}
