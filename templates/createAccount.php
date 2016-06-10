<div class="createAccountContainer">
    <div class="createAccountHeader">
    <h1 style="cursor: default;">Create Account</h1>
    </div>
    <div class="creatAccountForm">
      <form action="../Yatze/classes/createAccount.php" method="post">

        <div class="field-wrap">
        <label>
          User name
        </label>
        <input name="username" type="text"required autocomplete="off"/>
      </div>

      <div class="field-wrap">
        <label>
          Password
        </label>
        <input name="password" type="password"required autocomplete="off"/>
      </div>
      <div class="field-wrap">
        <label>
          Confirm Password
        </label>
        <input name="confirm-password" type="password"required autocomplete="off"/>
      </div>

      <button class="button" onclick="SwitchForm()"/>createAccount</button>

      </form>
      <p class="new-account"><a href="#" onclick="SwitchForm()">Already have an account?</a></p>
      </div>
</div>
