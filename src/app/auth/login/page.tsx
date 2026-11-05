"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowLeft, LockKeyhole, Mail, UserRound } from "lucide-react";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] min-h-dvh overflow-y-auto bg-gradient-to-br from-sky-50 via-white to-blue-100 px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-lg items-center justify-center">
        <section className="w-full overflow-hidden rounded-3xl border border-white/80 bg-white/85 shadow-2xl shadow-blue-900/10 backdrop-blur-sm">
          <div className="p-6 sm:p-9">
            <Link
              href="/auth/register"
              className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-700"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Buat akun
            </Link>

            <header className="mb-8 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <UserRound aria-hidden="true" className="size-7" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Selamat Datang kembali
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Masuk ke akun Anda
              </p>
            </header>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Alamat email
                </label>
                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Anda@contoh.com"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Kata sandi
                </label>
                <div className="relative">
                  <LockKeyhole
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Masukkan kata sandi Anda"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
              >
                Masuk
              </button>
              {submitted && (
                <p
                  role="status"
                  className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"
                >
                  Login belum dapat diproses saat ini.
                </p>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Baru di sini?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-blue-700 hover:underline"
              >
                Buat akun
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
