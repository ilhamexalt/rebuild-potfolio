/* eslint-disable react/no-children-prop */
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import Guest from "../layouts/Guest";

export default function Register() {
  return (
    <div>
      {/* <h1 className="font-medium text-2xl uppercase mb-5 text-center">
       
      </h1> */}
      <form>
        <div className="mb-4">
          <Label forInput="email">Name</Label>
          <Input name="name" id="name" placeholder="Exalt " />
        </div>
        <div className="mb-4">
          <Label forInput="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="exalt@gmail.com"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
          <div className="mb-4">
            <Label forInput="password">Password</Label>
            <Input type="password" name="email" id="password" />
          </div>
          <div className="mb-4">
            <Label forInput="passwordConfirm">confirm Password</Label>
            <Input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
            />
          </div>
        </div>
        <div className="mb-4">
          <Label forInput="gender">Gender</Label>
          <Select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </div>
        <div className="mb-4 flex justify-between">
          <Checkbox
            forInput="acceptance"
            label={"Aggree with Privacy and Terms"}
            name="acceptance"
            id="acceptance"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button>Register</Button>
          <span>
            Already have account? {""}
            <Link href="/login">
              <a
                className="decoration-indigo-400 text-indigo-400
            font-medium"
              >
                Login
              </a>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

Register.getLayout = (page) => (
  <Guest
    cardCLassName="lg:w-1/2"
    header="Register"
    title="Halaman Register"
    children={page}
  />
);
