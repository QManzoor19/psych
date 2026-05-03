// Video links per lesson — format: { id: "youtubeId", t: "Video Title", c: "Channel Name" }
// Each lesson gets both focused teaching videos and related general-channel videos.

const videoData = {
  // ═══ Chapter 1: Introduction to Psychology and Research Methods ═══
  "Introduction to Psychology and Research Methods": [
    { id: "vo4pMVb0R6M", t: "Intro to Psychology: Crash Course Psychology #1", c: "CrashCourse" },
    { id: "hFV71QPvX2I", t: "Psychological Research: Crash Course Psychology #2", c: "CrashCourse" },
    { id: "N6IAzlugWw0", t: "The Scientific Method", c: "Khan Academy" },
    { id: "42QuXLucH3Q", t: "Is Most Published Research Wrong?", c: "Veritasium" },
    { id: "Zohkzd0MYiI", t: "Is Psychology a Science?", c: "SciShow" },
    { id: "NNnIGh9g6fA", t: "Introduction to Human Behavioral Biology (Lecture 1)", c: "Stanford / Robert Sapolsky" }
  ],

  // ═══ Chapter 2: Brain and Behavior ═══
  "Brain and Behavior": [
    { id: "W4N-7AlzK7s", t: "The Chemical Mind: Crash Course Psychology #3", c: "CrashCourse" },
    { id: "vHrmiy4W9C0", t: "Meet Your Master — Getting to Know Your Brain: Crash Course Psychology #4", c: "CrashCourse" },
    { id: "JQVmkDUkZT4", t: "What Are You? (Brain, body, consciousness)", c: "Kurzgesagt" },
    { id: "NNnIGh9g6fA", t: "Introduction to Human Behavioral Biology", c: "Stanford / Robert Sapolsky" }
  ],

  // ═══ Chapter 3: Child Development ═══
  "Child Development": [
    { id: "8nz2dtv--ok", t: "The Growth of Knowledge: Crash Course Psychology #18 (Piaget & Vygotsky)", c: "CrashCourse" },
    { id: "YcQg1EshfIE", t: "Monkeys and Morality: Crash Course Psychology #19 (Attachment)", c: "CrashCourse" },
    { id: "G2XBIkHW954", t: "The Linguistic Genius of Babies", c: "TED / Patricia Kuhl" }
  ],

  // ═══ Chapter 4: Life-Span Development ═══
  "From Birth to Death: Life-Span Development": [
    { id: "PzyXGUCngoU", t: "Adolescence: Crash Course Psychology #20", c: "CrashCourse" },
    { id: "7gkdzkVbuVA", t: "Older People Are Happier (Socioemotional Selectivity)", c: "TED / Laura Carstensen" }
  ],

  // ═══ Chapter 5: Sensation and Reality ═══
  "Sensation and Reality": [
    { id: "unWnZvXJH2o", t: "Sensation & Perception: Crash Course Psychology #5", c: "CrashCourse" },
    { id: "fxZWtc0mYpQ", t: "Homunculus: Crash Course Psychology #6", c: "CrashCourse" }
  ],

  // ═══ Chapter 6: Perceiving the World ═══
  "Perceiving the World": [
    { id: "n46umYA_4dM", t: "Perceiving is Believing: Crash Course Psychology #7", c: "CrashCourse" },
    { id: "dBap_Lp-0oc", t: "The Illusion Only Some People Can See (Ames window)", c: "Veritasium" }
  ],

  // ═══ Chapter 7: States of Consciousness ═══
  "States of Consciousness": [
    { id: "rMHus-0wFSo", t: "To Sleep, Perchance to Dream: Crash Course Psychology #9", c: "CrashCourse" },
    { id: "9PW1fwKjo-Y", t: "Altered States: Crash Course Psychology #10 (Hypnosis & Drugs)", c: "CrashCourse" },
    { id: "5MuIMqhT8DM", t: "Sleep Is Your Superpower", c: "TED / Matt Walker" }
  ],

  // ═══ Chapter 8: Conditioning and Learning ═══
  "Conditioning and Learning": [
    { id: "qG2SwE_6uVM", t: "How to Train a Brain: Crash Course Psychology #11 (Pavlov & Skinner)", c: "CrashCourse" },
    { id: "eqNaLerMNOE", t: "Bobo Doll Experiment (Bandura) — original footage", c: "Albert Bandura / Stanford" }
  ],

  // ═══ Chapter 9: Memory ═══
  "Memory": [
    { id: "bSycdIx-C48", t: "How We Make Memories: Crash Course Psychology #13", c: "CrashCourse" },
    { id: "HVWbrNls-Kw", t: "Remembering and Forgetting: Crash Course Psychology #14", c: "CrashCourse" },
    { id: "HbMO1__9K5g", t: "The Fiction of Memory", c: "TED / Elizabeth Loftus" }
  ],

  // ═══ Chapter 10: Cognition, Language, and Creativity ═══
  "Cognition, Language, and Creativity": [
    { id: "R-sVnmmw6WY", t: "Cognition — How Your Mind Can Amaze and Betray You: Crash Course Psychology #15", c: "CrashCourse" },
    { id: "s9shPouRWCs", t: "Language: Crash Course Psychology #16", c: "CrashCourse" },
    { id: "CjVQJdIrDJ0", t: "Thinking, Fast and Slow — Talks at Google", c: "Talks at Google / Daniel Kahneman" }
  ],

  // ═══ Chapter 11: Intelligence ═══
  "Intelligence": [
    { id: "9xTz3QjcloI", t: "Controversy of Intelligence: Crash Course Psychology #23", c: "CrashCourse" },
    { id: "75g4d5sF3xI", t: "Brains vs. Bias: Crash Course Psychology #24", c: "CrashCourse" },
    { id: "H14bBuluwB8", t: "Grit — The Power of Passion and Perseverance", c: "TED / Angela Lee Duckworth" }
  ],

  // ═══ Chapter 12: Motivation and Emotion ═══
  "Motivation and Emotion": [
    { id: "9hdSLiHaJz8", t: "The Power of Motivation: Crash Course Psychology #17", c: "CrashCourse" },
    { id: "gAMbkJk6gnE", t: "Feeling All the Feels: Crash Course Psychology #25 (Emotion)", c: "CrashCourse" }
  ],

  // ═══ Chapter 13: Gender and Sexuality ═══
  "Gender and Sexuality": [
    { id: "Qymp_VaFo9M", t: "Let's Talk About Sex: Crash Course Psychology #27", c: "CrashCourse" }
  ],

  // ═══ Chapter 14: Personality ═══
  "Personality": [
    { id: "mUELAiHbCxc", t: "Rorschach and Freudians: Crash Course Psychology #21", c: "CrashCourse" },
    { id: "sUrV6oZ3zsk", t: "Measuring Personality: Crash Course Psychology #22 (Big Five)", c: "CrashCourse" }
  ],

  // ═══ Chapter 15: Health, Stress, and Coping ═══
  "Health, Stress, and Coping": [
    { id: "4KbSRXP0wik", t: "Emotion, Stress, and Health: Crash Course Psychology #26", c: "CrashCourse" },
    { id: "NNnIGh9g6fA", t: "Introduction to Human Behavioral Biology (stress context)", c: "Stanford / Robert Sapolsky" }
  ],

  // ═══ Chapter 16: Psychological Disorders ═══
  "Psychological Disorders": [
    { id: "wuhJ-GkRRQc", t: "Psychological Disorders: Crash Course Psychology #28", c: "CrashCourse" }
  ],

  // ═══ Chapter 17: Therapies ═══
  "Therapies": [
    { id: "6nEL44QkL9w", t: "Getting Help — Psychotherapy: Crash Course Psychology #35", c: "CrashCourse" },
    { id: "w2efaHgJ93A", t: "Biomedical Treatments: Crash Course Psychology #36", c: "CrashCourse" }
  ],

  // ═══ Chapter 18: Social Behavior ═══
  "Social Behavior": [
    { id: "h6HLDV0T5Q8", t: "Social Thinking: Crash Course Psychology #37", c: "CrashCourse" },
    { id: "UGxGDdQnC1Y", t: "Social Influence: Crash Course Psychology #38", c: "CrashCourse" },
    { id: "OsFEV35tWsg", t: "The Psychology of Evil (Stanford Prison & situational power)", c: "TED / Philip Zimbardo" }
  ],

  // ═══ Chapter 19: Attitudes, Culture, and Human Relations ═══
  "Attitudes, Culture, and Human Relations": [
    { id: "7P0iP2Zm6a4", t: "Prejudice and Discrimination: Crash Course Psychology #39", c: "CrashCourse" }
  ],

  // ═══ Chapter 20: Applied Psychology ═══
  "Applied Psychology": [
    { id: "XoTx7Rt4dig", t: "Aggression vs. Altruism: Crash Course Psychology #40", c: "CrashCourse" }
  ],

  // ═══ Unit 9 — Advanced Concepts ═══
  // Ch 21: Advanced Psychoanalysis
  "Advanced Psychoanalysis — Freud and Jung": [
    { id: "j0KzUS0b_uc", t: "Introduction to Carl Jung — The Psyche, Archetypes, Individuation", c: "Academy of Ideas" }
  ],

  // Ch 22: Advanced Behaviorism
  "Advanced Behaviorism — Schedules and Therapies": [
    { id: "TtfQlkGwE2U", t: "Pigeon Turn (Skinner shaping demonstration)", c: "B.F. Skinner Foundation" },
    { id: "xt-ycTMISwg", t: "Skinner Shaping Pigeon Turn Clip", c: "B.F. Skinner Foundation" }
  ],

  // Ch 23: Cognitive Frameworks
  "Cognitive Frameworks for Learning": [
    { id: "n_eHLAslnNw", t: "Cognitive Load Theory: A Brief Explainer", c: "Educational Psych" }
  ],

  // Ch 24: Social-Cognitive & Humanistic
  "Social-Cognitive and Humanistic Deep Dives": [
    { id: "VGrcets0E6I", t: "Promoting Motivation, Health, and Excellence (Self-Determination Theory)", c: "TEDx / Edward Deci" }
  ],
};
