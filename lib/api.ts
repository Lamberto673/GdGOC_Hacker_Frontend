const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

export type Track = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
  what_you_do: string;
  explore_link: string;
  open: boolean;
};

export type Format = {
  id: string;
  name: string;
  description: string;
  icon: string;
  cta: string;
};

export type Journey = {
  step: number;
  id: string;
  title: string;
  description: string;
};

export type Value = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type Role = {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: string;
};

export type InquiryCategory = {
  id: string;
  label: string;
  description: string;
  icon: string;
  guidance: string;
};

export const getData = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  const json = await res.json();
  return json.data;
};
