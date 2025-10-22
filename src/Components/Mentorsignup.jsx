/*
MentorSignup.jsx
Fully upgraded Mentor Signup Form
- Multi-step: Welcome → Account → Personal → Skills → Review
- Glassmorphic card with neon gradients
- Stepper & progress bar
- Framer Motion animations
- Profile image upload & preview
- Skill tags with add/remove
- Responsive & accessible
*/

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Camera, Tag, DollarSign, CheckCircle } from "lucide-react";

export default function MentorSignup() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // Step 1 — Account
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Step 2 — Personal
  const [fullName, setFullName] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [profileFile, setProfileFile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const fileRef = useRef(null);

  // Step 3 — Skills & Availability
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [hourlyRate, setHourlyRate] = useState("");
  const [availability, setAvailability] = useState("Flexible");

  // Validators
  const isEmailValid = (e) => /\S+@\S+\.\S+/.test(e);
  const isPasswordStrong = (p) => p.length >= 8;
  const canProceed = (s) => {
    if (s === 0) return true;
    if (s === 1) return isEmailValid(email) && isPasswordStrong(password);
    if (s === 2) return fullName.trim().length >= 2 && experience !== "";
    if (s === 3) return skills.length > 0 && hourlyRate !== "";
    return false;
  };

  const next = () => {
    if (!canProceed(step)) return;
    setStep((st) => Math.min(4, st + 1));
  };

  const back = () => setStep((st) => Math.max(0, st - 1));

  const handleProfile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setProfileFile(f);
    setProfilePreview(URL.createObjectURL(f));
  };

  const addSkill = (e) => {
    e.preventDefault();
    const v = skillInput.trim();
    if (!v || skills.includes(v)) return;
    setSkills((s) => [...s, v]);
    setSkillInput("");
  };

  const removeSkill = (i) => setSkills((s) => s.filter((_, idx) => idx !== i));

  const handleSkillEnter = (e) => {
    if (e.key === "Enter") addSkill(e);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (step !== 4) return setStep(4);
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("email", email);
      fd.append("fullName", fullName);
      fd.append("experience", experience);
      fd.append("bio", bio);
      fd.append("skills", JSON.stringify(skills));
      fd.append("hourlyRate", hourlyRate);
      fd.append("availability", availability);
      if (profileFile) fd.append("profile", profileFile);

      await new Promise((r) => setTimeout(r, 1200)); // simulate submission
      alert("Profile created — welcome aboard!");

      // Reset
      setStep(0);
      setEmail("");
      setPassword("");
      setFullName("");
      setExperience("");
      setBio("");
      setProfileFile(null);
      setProfilePreview(null);
      setSkills([]);
      setHourlyRate("");
      setAvailability("Flexible");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
  };

  const stepsArr = [
    { id: 0, title: "Welcome" },
    { id: 1, title: "Account" },
    { id: 2, title: "Personal" },
    { id: 3, title: "Skills" },
    { id: 4, title: "Review" },
  ];
  const progress = (step / 4) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden p-4">
      {/* Background blobs */}
      <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 rounded-full opacity-40 filter blur-3xl animate-blob top-[-20%] left-[-10%]" />
      <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 rounded-full opacity-30 filter blur-3xl animate-blob animation-delay-2000 bottom-[-20%] right-[-10%]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="rounded-2xl backdrop-blur-md bg-white/6 border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Header + Progress */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Create Your Mentor Profile
              </h1>
              <p className="mt-1 text-white/80">Share your expertise professionally.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="text-xs text-white/60">Progress</div>
              <div className="w-full sm:w-40 bg-white/8 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 shadow-[0_6px_20px_rgba(236,72,153,0.18)] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {stepsArr.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= s.id
                      ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-white/6 text-white/60 border border-white/6"
                  }`}
                >
                  {s.id === 0 && <User size={16} />}
                  {s.id === 1 && <Mail size={16} />}
                  {s.id === 2 && <User size={16} />}
                  {s.id === 3 && <Tag size={16} />}
                  {s.id === 4 && <CheckCircle size={16} />}
                </div>
                {i < stepsArr.length - 1 && (
                  <div className={`w-8 h-0.5 ${step > s.id ? "bg-gradient-to-r from-purple-400 to-pink-400" : "bg-white/6"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-6">
            <AnimatePresence mode="wait">
              {/* Step 0: Welcome */}
              {step === 0 && (
                <motion.div key="welcome" variants={fadeInUp} initial="hidden" animate="show" exit="exit" className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-white">Welcome! Ready to inspire?</h2>
                  <p className="text-white/80">A few quick steps to create a standout mentor profile.</p>
                  <button type="button" onClick={next} className="px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 transform-gpu transition">Get Started</button>
                </motion.div>
              )}

              {/* Step 1: Account */}
              {step === 1 && (
                <motion.div key="account" variants={fadeInUp} initial="hidden" animate="show" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="relative block">
                      <span className="absolute left-3 top-3 text-white/70"><Mail size={16} /></span>
                      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/6 border border-white/8 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    </label>
                    <div className="mt-2 text-xs text-white/60">{email && !isEmailValid(email) ? "Enter a valid email" : "We'll use this to sign you in"}</div>
                  </div>
                  <div className="sm:col-span-2 relative">
                    <label className="relative block">
                      <span className="absolute left-3 top-3 text-white/70"><Lock size={16} /></span>
                      <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-12 pr-20 py-3 rounded-xl bg-white/6 border border-white/8 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-sm text-white/70">{showPassword ? "Hide" : "Show"}</button>
                    </label>
                    <div className="mt-2 text-xs text-white/60">{password && !isPasswordStrong(password) ? "Use at least 8 characters" : "Choose a strong password"}</div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Personal */}
              {step === 2 && (
                <motion.div key="personal" variants={fadeInUp} initial="hidden" animate="show" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-1">Full Name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/8 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-1">Experience (Years)</label>
                    <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Ex: 3" className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/8 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-white/80 mb-1">Bio</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell something about yourself" className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/8 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" rows={3} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-white/80 mb-1">Profile Picture</label>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-full bg-white/6 flex items-center justify-center overflow-hidden border border-white/10 cursor-pointer hover:scale-105 transition-transform" onClick={() => fileRef.current.click()}>
                        {profilePreview ? <img src={profilePreview} alt="Preview" className="w-full h-full object-cover" /> : <Camera size={24} className="text-white/50" />}
                      </div>
                      <input type="file" accept="image/*" ref={fileRef} className="hidden" onChange={handleProfile} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Skills & Availability */}
              {step === 3 && (
                <motion.div key="skills" variants={fadeInUp} initial="hidden" animate="show" exit="exit" className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-white/80 mb-1">Skills</label>
                    <div className="flex gap-2 flex-wrap">
                      {skills.map((s, i) => (
                        <span key={i} className="bg-purple-500/30 text-white px-3 py-1 rounded-full flex items-center gap-2">
                          {s} <button type="button" onClick={() => removeSkill(i)} className="hover:text-red-400">×</button>
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <input type="text" placeholder="Add skill" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={handleSkillEnter} className="flex-1 px-4 py-2 rounded-xl bg-white/6 border border-white/8 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                      <button type="button" onClick={addSkill} className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">Add</button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-white/80 mb-1">Hourly Rate ($)</label>
                      <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/8 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-white/80 mb-1">Availability</label>
                      <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/6 border border-white/8 text-white focus:outline-none focus:ring-2 focus:ring-purple-400">
                        <option>Flexible</option>
                        <option>Weekdays</option>
                        <option>Weekends</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <motion.div key="review" variants={fadeInUp} initial="hidden" animate="show" exit="exit" className="space-y-4 text-white">
                  <h2 className="text-2xl font-bold">Review Your Profile</h2>
                  <p className="text-white/70">Confirm all details before submission.</p>
                  <div className="space-y-2">
                    <div>Email: {email}</div>
                    <div>Full Name: {fullName}</div>
                    <div>Experience: {experience} years</div>
                    <div>Bio: {bio}</div>
                    <div>Skills: {skills.join(", ")}</div>
                    <div>Hourly Rate: ${hourlyRate}</div>
                    <div>Availability: {availability}</div>
                    {profilePreview && <img src={profilePreview} alt="Profile" className="w-32 h-32 rounded-full object-cover mt-2" />}
                  </div>
                  <button type="submit" disabled={submitting} className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 transform-gpu transition mt-4">
                    {submitting ? "Submitting..." : "Submit Profile"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              {step > 0 && step < 4 && (
                <button type="button" onClick={back} className="px-6 py-2 rounded-full bg-white/6 text-white/90 hover:bg-white/10">Back</button>
              )}
              {step < 4 && (
                <button type="button" onClick={next} disabled={!canProceed(step)} className={`px-6 py-2 rounded-full text-white font-semibold shadow-lg ${canProceed(step) ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transform-gpu transition" : "bg-white/6 cursor-not-allowed"}`}>Next</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
