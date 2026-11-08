"use client";
import { ChevronDown, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { InquiryCategory } from "@/lib/api";

type MessageFormProps = {
  categories: InquiryCategory[] | null;
  selected: string;
  onSelect: (id: string) => void;
};

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  agree: false,
};

const MessageForm = ({ categories, selected, onSelect }: MessageFormProps) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Please enter your first name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Please enter a valid email.";
    if (!selected) newErrors.category = "Please pick a category.";
    if (!form.subject.trim()) newErrors.subject = "Please add a subject.";
    if (!form.message.trim()) newErrors.message = "Please write a message.";
    if (!form.agree) newErrors.agree = "Please agree before sending.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSent(true);
    }
  };

  const input = (name: string) =>
    `w-full h-13.5 px-4 rounded-lg border bg-white text-[15px] outline-none placeholder:text-subtle focus:border-brand ${
      errors[name] ? "border-g-red" : "border-line"
    }`;

  if (sent) {
    return (
      <div className="flex flex-col justify-center items-start gap-4 p-9 rounded-3xl bg-surface">
        <h2 className="text-3xl leading-8.5 font-bold">
          Thanks, {form.firstName}!
        </h2>
        <p className="text-subtle leading-6.25">
          Your message is on its way. We’ll reply to {form.email} as soon as we
          can.
        </p>
        <button
          onClick={() => {
            setForm(emptyForm);
            setSent(false);
          }}
          className="flex items-center gap-3 text-link font-medium cursor-pointer hover:underline"
        >
          Send another message <MoveRight className="size-5" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col justify-start items-start gap-6 p-9 rounded-3xl bg-surface"
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl leading-8.5 font-bold">Send us a message</h2>
        <span className="font-display text-[28px] text-link">↗</span>
      </div>
      <p className="text-[13px] text-subtle">Fields marked * are required.</p>

      <div className="grid grid-cols-2 gap-5 w-full">
        <label className="flex flex-col gap-2.5 text-sm font-medium">
          First name *
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Your first name"
            className={input("firstName")}
          />
          {errors.firstName && (
            <span className="text-xs font-normal text-g-red">
              {errors.firstName}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2.5 text-sm font-medium">
          Last name
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Your last name"
            className={input("lastName")}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2.5 w-full text-sm font-medium">
        Email address *
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Where we can reply to you"
          className={input("email")}
        />
        {errors.email && (
          <span className="text-xs font-normal text-g-red">{errors.email}</span>
        )}
      </label>

      <label className="flex flex-col gap-2.5 w-full text-sm font-medium">
        University / organization
        <input
          name="organization"
          value={form.organization}
          onChange={handleChange}
          placeholder="Where you study or work (optional)"
          className={input("organization")}
        />
      </label>

      <label className="flex flex-col gap-2.5 w-full text-sm font-medium">
        Inquiry category *
        <div className="relative w-full">
          <select
            value={selected}
            onChange={(e) => onSelect(e.target.value)}
            className={`${input("category")} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Pick a category
            </option>
            {categories?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-link pointer-events-none" />
        </div>
        {errors.category && (
          <span className="text-xs font-normal text-g-red">
            {errors.category}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-2.5 w-full text-sm font-medium">
        Subject *
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="A short introduction to your question"
          className={input("subject")}
        />
        {errors.subject && (
          <span className="text-xs font-normal text-g-red">
            {errors.subject}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-2.5 w-full text-sm font-medium">
        Your message *
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a little about your question or idea…"
          className={`${input("message")} h-36.5 py-4 resize-none`}
        />
        {errors.message && (
          <span className="text-xs font-normal text-g-red">
            {errors.message}
          </span>
        )}
      </label>

      <label className="flex justify-start items-center gap-3 text-[13px] text-subtle cursor-pointer">
        <input
          type="checkbox"
          checked={form.agree}
          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
          className="size-5 accent-brand cursor-pointer"
        />
        I agree that the information I share can be used to respond to this
        inquiry.
      </label>
      {errors.agree && (
        <span className="-mt-4 text-xs text-g-red">{errors.agree}</span>
      )}

      <div className="flex justify-between items-center w-full">
        <button
          type="submit"
          className="flex items-center gap-4 h-13 px-6 rounded-lg bg-brand text-white font-medium cursor-pointer"
        >
          Send message <MoveRight className="size-5" />
        </button>
        <p className="text-xs leading-4.5 text-subtle max-w-57.5">
          Please don’t include passwords or sensitive personal information.
        </p>
      </div>
    </form>
  );
};

export default MessageForm;
