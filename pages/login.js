/* eslint-disable react/no-children-prop */
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Guest from "../layouts/Guest";

export default function Login() {
  return (
    <div>
      {/* <h1 className="font-medium text-2xl uppercase mb-5 text-center">
       
      </h1> */}
      <form>
        <div className="mb-6">
          <Label forInput="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="exalt@gmail.com"
          />
        </div>
        <div className="mb-6">
          <Label forInput="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </div>
        <div className="mb-5 flex justify-between">
          <Checkbox
            forInput="remember"
            label={"Remember me"}
            name="remember"
            id="remember"
          />
          <a href="#" className="underline">
            Forgot Password
          </a>
        </div>
        <div className="flex items-center justify-between">
          <Button>Login</Button>
          <Link href="/register">
            <a
              className="decoration-indigo-400 text-indigo-400
            font-medium"
            >
              Register?
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}

Login.getLayout = (page) => (
  <Guest header="Login" title="Halaman Login" children={page} />
);
