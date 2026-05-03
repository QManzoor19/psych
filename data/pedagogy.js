// ═══════════════════════════════════════════
// PEDAGOGICAL FRAMEWORK DATA
// Gagné's 9 Events, Bloom's Taxonomy, 4C/ID, UDL
// ═══════════════════════════════════════════

const pedagogy = {

  "Introduction to Psychology and Research Methods": {
    hook: "You think you know how people work — after all, you've lived with humans your whole life. But research has shown that common-sense beliefs about behavior are wrong more often than right. This lesson is about how to actually find out.",
    objectives: [
      "Define psychology as the scientific study of behavior and mental processes",
      "Distinguish empirical evidence from common sense and expert opinion",
      "Identify the four goals of psychology: description, understanding, prediction, and control",
      "Compare the major schools of thought and the five modern perspectives",
      "Explain the scientific method and the logic of experimental design",
      "Distinguish correlation from causation and recognize common methodological pitfalls"
    ],
    prerequisites: [],
    transfer: "Pick a belief you hold about human behavior — e.g., 'violent video games make kids aggressive,' 'opposites attract,' 'we only use 10% of our brain.' Formulate it as a testable hypothesis, propose an operational definition, and sketch how you'd test it with an experiment rather than just opinion.",
    bloomsLadder: {
      remember: "List the four goals of psychology and the five modern perspectives.",
      understand: "Explain why correlation does not imply causation, using the churches-and-bars example.",
      apply: "Design a simple experiment to test whether listening to music while studying affects memory — identify the IV, DV, experimental group, control group, and random assignment.",
      analyse: "Compare how a behaviorist, humanist, and biopsychologist would each explain why a student fails an exam — what does each view highlight or miss?",
      evaluate: "Assess the claim 'Introspection is a valid way to study the mind.' Use the collapse of structuralism as evidence.",
      create: "Build a short research-design rubric that you could use to evaluate any psychology study reported in the news."
    },
    tags: ["Foundation", "Scientific Method", "Career: Any Field"]
  },

  "Brain and Behavior": {
    hook: "Right now, 100 billion cells in your skull are firing in patterns that produce your entire inner world — your memories, your mood, the fact that you're reading this sentence. One bad stroke in the wrong spot and someone can stop recognizing their own family. What is this three-pound machine actually doing?",
    objectives: [
      "Identify the parts of a neuron and describe how an action potential is generated",
      "Explain how neurons communicate across synapses using neurotransmitters",
      "Distinguish the central vs. peripheral, and somatic vs. autonomic nervous systems",
      "Describe the function of each major lobe of the cerebral cortex",
      "Explain hemispheric specialization and what split-brain research reveals",
      "Identify key subcortical structures (thalamus, hypothalamus, hippocampus, amygdala, cerebellum) and their functions",
      "Compare the major brain imaging and research methods (EEG, CT, MRI, fMRI, PET)"
    ],
    prerequisites: ["Introduction to Psychology and Research Methods"],
    transfer: "Pick a moment from today — reaching for coffee, laughing at a message, feeling stressed before a meeting. Trace it through the brain: which senses detected what? Which brain structures processed it? Did it involve the cortex, limbic system, autonomic nervous system? You should be able to explain ordinary behavior in terms of brain machinery.",
    bloomsLadder: {
      remember: "List the four lobes of the cortex and their primary functions.",
      understand: "Explain how a neurotransmitter like dopamine influences behavior, using Parkinson's as an example.",
      apply: "A patient can speak fluently but produces nonsense words. Which brain area is most likely damaged and why?",
      analyse: "Compare how the sympathetic and parasympathetic branches of the ANS interact during (a) a job interview and (b) a big meal afterward.",
      evaluate: "Assess the pop-psychology claim that some people are 'right-brained' and others 'left-brained.' What does split-brain research actually show?",
      create: "Design a thought experiment: if you could selectively lesion one brain area in a volunteer for science, which would tell you the most about consciousness — and what ethical problems would your proposal raise?"
    },
    tags: ["Biology", "Neuroscience", "Career: Medicine"]
  },

  "Child Development": {
    hook: "A 4-year-old will insist a tall, thin glass holds more milk than a short, wide one — even if she just watched you pour the milk back and forth. This isn't a mistake; it's how her mind genuinely works. So when exactly do humans become capable of adult thought, and what's driving the change?",
    objectives: [
      "Explain how heredity and environment interact to shape development",
      "Identify key teratogens and explain why timing of exposure matters",
      "Describe neonatal reflexes and early perceptual abilities",
      "Distinguish the four types of attachment and the evidence for each",
      "Trace language development from cooing to complex speech",
      "Summarize Piaget's four stages and compare his view with Vygotsky's sociocultural theory",
      "Identify the four parenting styles and their typical outcomes"
    ],
    prerequisites: ["Introduction to Psychology and Research Methods", "Brain and Behavior"],
    transfer: "Think of a young child in your life — a sibling, cousin, niece, nephew, or a friend's kid. Identify their approximate Piagetian stage, their attachment style (if you can tell), the parenting style they experience, and where their zone of proximal development lies for a skill they're learning. Does the framework actually fit them?",
    bloomsLadder: {
      remember: "List Piaget's four stages in order, with their approximate ages.",
      understand: "Explain why conservation is mastered in the concrete operational stage but not before.",
      apply: "Given a 4-year-old who cannot take another person's visual perspective, identify the stage and the term for this limitation.",
      analyse: "Compare how Piaget and Vygotsky would each design a preschool curriculum. Where do they agree and disagree?",
      evaluate: "Assess the evidence that early attachment style predicts adult romantic relationships. How strong is the causal claim?",
      create: "Design a parenting guide for a new parent that distills the main evidence-based advice from this lesson into one page."
    },
    tags: ["Development", "Children", "Career: Education", "Career: Pediatrics"]
  },

  "From Birth to Death: Life-Span Development": {
    hook: "The Harvard Study of Adult Development has followed people for 85 years, and it keeps delivering the same punchline: the single strongest predictor of a happy, healthy old age isn't money, fame, or career — it's the quality of your close relationships. So how does the trajectory from teenager to elder actually unfold, and what choices shape where it ends up?",
    objectives: [
      "Distinguish puberty from adolescence and describe the brain changes underlying teenage behavior",
      "Identify Marcia's four identity statuses and Erikson's adult stages",
      "Explain the concept of emerging adulthood and its cultural basis",
      "Distinguish fluid and crystallized intelligence across the lifespan",
      "Summarize the research on aging, well-being, and the positivity effect",
      "Evaluate Kübler-Ross's stages and what modern research says about grieving and dying"
    ],
    prerequisites: ["Child Development"],
    transfer: "Think of yourself (or an adult you know well) at three life stages: at 10, now, and imagined at 60. For each, identify the Eriksonian crisis at play and one concrete way it is being resolved — well or badly. What would you change if you could?",
    bloomsLadder: {
      remember: "List Erikson's eight psychosocial stages with their approximate ages.",
      understand: "Explain why fluid intelligence tends to decline with age while crystallized intelligence grows.",
      apply: "Classify a 22-year-old who has explored multiple majors and just chosen social work into one of Marcia's four identity statuses.",
      analyse: "Compare how generativity (Erikson's midlife stage) manifests differently in a parent, a mentor at work, and a volunteer. Is one form more genuine than another?",
      evaluate: "Assess the evidence for Kübler-Ross's five stages of dying. How does contemporary research amend her original claim?",
      create: "Design a short questionnaire a gerontologist could use to measure socioemotional selectivity in older adults."
    },
    tags: ["Development", "Lifespan", "Career: Counseling"]
  },

  "Sensation and Reality": {
    hook: "Hold your hand in front of your face. You see a hand — but what actually reached your eye is photons bouncing off skin, arriving in a specific pattern that your retinal cells turned into electrical signals. The 'hand' is your brain's construction. This lesson is about how physical energy becomes conscious experience.",
    objectives: [
      "Distinguish sensation from perception",
      "Explain transduction in vision, hearing, and the other senses",
      "Apply psychophysical concepts: absolute threshold, JND, Weber's law, signal detection theory",
      "Describe the structure and function of the eye and ear",
      "Compare trichromatic and opponent-process theories of color vision",
      "Explain gate control theory and why pain is both a sensation and an interpretation"
    ],
    prerequisites: ["Brain and Behavior"],
    transfer: "Spend a minute with your eyes closed identifying everything you can hear. Which sounds are close, which are distant? Notice how quickly sensory adaptation removes sounds that were obvious a moment ago. You've just witnessed psychophysics in action.",
    bloomsLadder: {
      remember: "List the five basic taste sensations.",
      understand: "Explain why putting on a watch produces a felt sensation that fades within minutes.",
      apply: "Given that you can barely tell the difference between a 50-lb and 51-lb weight, use Weber's law to predict what weight change you'd need to notice at 500 lb.",
      analyse: "Compare how trichromatic and opponent-process theories each explain a separate aspect of color vision.",
      evaluate: "A hospital radiologist misses a small tumor on a scan. Using signal detection theory, analyze the two components (sensitivity vs. criterion) that could produce this error.",
      create: "Design a simple demo to show a friend that the blind spot exists in their own vision."
    },
    tags: ["Perception", "Biology", "Neuroscience"]
  },

  "Perceiving the World": {
    hook: "Your eyes are delivering the brain a flat, noisy, inverted, constantly-jittering image full of gaps, yet you experience a stable, three-dimensional world with sharp edges and steady colors. That gap between retinal input and perceptual experience is almost entirely bridged by brain-side interpretation — and it's fallible.",
    objectives: [
      "Identify the major Gestalt grouping principles and apply them to visual scenes",
      "Distinguish binocular from monocular depth cues",
      "Explain the four main perceptual constancies",
      "Compare top-down and bottom-up processing",
      "Explain perceptual set and its consequences for memory and testimony",
      "Evaluate claims about extrasensory perception using psychology's evidence standards"
    ],
    prerequisites: ["Sensation and Reality"],
    transfer: "Pick any photograph or painting and list every depth cue the image uses to produce an illusion of 3D. You'll notice most images use several cues at once — which is why 2D images feel three-dimensional at all.",
    bloomsLadder: {
      remember: "Name five Gestalt grouping principles.",
      understand: "Explain why eyewitnesses often 'remember' details that weren't in the original event.",
      apply: "Given a photograph of a long hallway, identify at least three monocular depth cues that create the sense of depth.",
      analyse: "Compare how a radiologist and a new parent both perform signal detection — what differs about the payoffs?",
      evaluate: "Assess the evidence for ESP. What standards would any claim have to meet to be accepted?",
      create: "Design a classroom demo that shows classmates how perceptual set can literally change what they see in an image."
    },
    tags: ["Perception", "Cognition"]
  },

  "States of Consciousness": {
    hook: "You'll spend about a third of your life unconscious. Another chunk of waking life is spent in daydreams, flow states, boredom trances, or mild alterations from caffeine and alcohol. 'Normal consciousness' is only one setting on a large dial — and understanding the other settings tells us what consciousness actually is.",
    objectives: [
      "Describe the stages of sleep and the function of REM",
      "Explain circadian rhythms and the effects of sleep deprivation",
      "Compare theories of dreaming (Freudian, activation-synthesis, memory consolidation)",
      "Distinguish state and social-role theories of hypnosis",
      "Describe two main forms of meditation and their documented effects",
      "Classify major psychoactive drugs and distinguish tolerance, dependence, and addiction"
    ],
    prerequisites: ["Brain and Behavior"],
    transfer: "Pick one of your own altered states — a deep sleep, a vivid dream, a meditative moment, a drunken night, a flow state while doing something you love. Describe how attention, memory, mood, and time sense were 'dialed' differently than in ordinary waking consciousness.",
    bloomsLadder: {
      remember: "List the four main stages of sleep and identify which is associated with vivid dreaming.",
      understand: "Explain why sleep deprivation impairs driving as much as alcohol does.",
      apply: "Given a friend who works night shifts and can't sleep on days off, identify which circadian mechanisms are being disrupted.",
      analyse: "Compare activation-synthesis and Freudian theories of dreaming. What evidence would support each?",
      evaluate: "Assess the claim that hypnosis is a 'special trance state.' How strong is the evidence for a state theory versus a social-role theory?",
      create: "Design a simple meditation protocol for someone who has never meditated — and one concrete way to measure whether it's working."
    },
    tags: ["Consciousness", "Sleep", "Neuroscience"]
  },

  "Conditioning and Learning": {
    hook: "Every single habit you have — good or bad — was learned. Your fear of spiders, your taste for coffee, your habit of checking your phone 90 times a day, your ability to drive, your reflex to say 'bless you' when someone sneezes. Psychology has worked out the mechanics of how these get installed in you, and understanding them gives you the keys to change almost any behavior, in yourself or others.",
    objectives: [
      "Define learning and distinguish classical, operant, cognitive, and observational forms",
      "Apply the classical-conditioning terminology (US, UR, CS, CR) to real-life examples",
      "Identify acquisition, extinction, spontaneous recovery, generalization, and discrimination",
      "Distinguish positive and negative reinforcement from positive and negative punishment",
      "Compare the four schedules of reinforcement and their typical response patterns",
      "Summarize Bandura's Bobo doll study and the four components of observational learning",
      "Recognize biological constraints on learning (taste aversions, prepared fears, instinctive drift)"
    ],
    prerequisites: ["Brain and Behavior"],
    transfer: "Pick a habit of yours you'd like to change. Classify the consequences that currently maintain it using the four-quadrant reinforcement/punishment scheme. Design an intervention that replaces current reinforcement with reinforcement of a desired alternative. What would success look like after 30 days?",
    bloomsLadder: {
      remember: "Define classical conditioning and list its four key terms (US, UR, CS, CR).",
      understand: "Explain why variable-ratio schedules produce such persistent behavior.",
      apply: "A child throws tantrums and the parent eventually gives in. Identify which schedule of reinforcement is maintaining the tantrums and suggest an intervention.",
      analyse: "Compare classical and operant conditioning: what kinds of behavior does each best explain, and where do they overlap?",
      evaluate: "Evaluate the claim that 'punishment doesn't work.' Under what conditions is punishment effective, and what are its drawbacks relative to reinforcement?",
      create: "Design a token economy for a 12-year-old to build the habit of daily reading for 30 minutes. Specify target behaviors, reinforcers, schedule, and expected timeline."
    },
    tags: ["Learning", "Behavior", "Career: Education", "Career: Therapy"]
  },

  "Memory": {
    hook: "You spent 13 years in school and could probably not tell us more than a few percent of what was taught. Why? Not because you're stupid — because memory doesn't work the way schools assume. Memory has its own laws, and once you know them, you'll study less and learn more, and stop trusting your flashbulb memories or your eyewitness certainty quite so much.",
    objectives: [
      "Describe the Atkinson-Shiffrin three-stage model and the role of sensory, short-term, and long-term memory",
      "Distinguish explicit (episodic, semantic) and implicit (procedural, priming) memory",
      "Explain Baddeley's working memory model",
      "Apply the levels-of-processing principle to study strategies",
      "Summarize what H.M.'s case taught psychology about memory systems",
      "Explain forgetting (encoding failure, interference, retrieval failure) and why spaced practice and active retrieval combat it",
      "Evaluate the reliability of flashbulb memories and eyewitness testimony"
    ],
    prerequisites: ["Brain and Behavior", "Conditioning and Learning"],
    transfer: "Pick a topic you're currently trying to learn (for this course or elsewhere). Redesign your study plan using spaced practice, active retrieval, elaboration, and interleaving. Drop the techniques that feel productive but are actually weak (highlighting, re-reading). Run the plan for two weeks and assess.",
    bloomsLadder: {
      remember: "List the three stages of the Atkinson-Shiffrin model.",
      understand: "Explain why procedural memory can be preserved when explicit memory is destroyed.",
      apply: "Given a student who crams the night before exams and does poorly, identify which memory principles are being violated and recommend changes.",
      analyse: "Compare flashbulb memories and ordinary memories — what is similar, what is different, and what does that tell us about the relationship between confidence and accuracy?",
      evaluate: "Assess the reliability of eyewitness testimony in criminal cases using the memory research on the misinformation effect and leading questions.",
      create: "Design a mnemonic (using method of loci, acronyms, or imagery) to remember the key terms from this lesson. Test yourself on it a week later — does it work?"
    },
    tags: ["Memory", "Learning", "Cognition"]
  },

  "Cognition, Language, and Creativity": {
    hook: "You're now going to learn about the two systems that steer almost every decision you make — one fast and automatic, one slow and deliberate — and about the predictable ways the fast one gets you into trouble. Kahneman won a Nobel Prize for this work. It will change how you read a news article, make a big purchase, or argue with anyone.",
    objectives: [
      "Define cognition and describe how concepts, images, and language form the building blocks of thought",
      "Compare algorithms and heuristics as problem-solving strategies",
      "Identify common cognitive biases: availability, representativeness, anchoring, confirmation bias, sunk cost",
      "Describe Kahneman's System 1 / System 2 framework",
      "Identify the four levels of language structure and the evidence on animal language",
      "Evaluate the linguistic relativity hypothesis",
      "Distinguish convergent and divergent thinking; describe Wallas's four stages of creative thinking"
    ],
    prerequisites: ["Memory"],
    transfer: "Pick a recent decision you made (a purchase, a choice of friend-group, a vote, a career move). Identify one System 1 heuristic that shaped it and one System 2 reasoning step. Would you make the same decision now, knowing the biases you know?",
    bloomsLadder: {
      remember: "Name five common cognitive biases.",
      understand: "Explain why the Linda problem ('bank teller vs. bank teller + feminist') trips most people up.",
      apply: "Describe a recent news event where availability heuristic plausibly biased public reaction, and estimate how the reaction would differ under better statistical reasoning.",
      analyse: "Compare Gardner's multiple intelligences with Sternberg's triarchic theory. What does each capture that a single g-factor misses?",
      evaluate: "Assess the evidence for linguistic relativity. Under what conditions does language meaningfully shape thought, and under what conditions does it not?",
      create: "Design a decision-making checklist for a domain you care about (medicine, hiring, investing, voting) that counteracts three specific cognitive biases."
    },
    tags: ["Cognition", "Decision-making", "Career: Any Field"]
  },

  "Intelligence": {
    hook: "A century of testing has produced one of the most predictive measures in psychology — and one of the most abused. IQ genuinely predicts real-world outcomes. It's also been used to justify sterilization, immigration bans, and educational segregation. Understanding what intelligence testing shows, what it misses, and what it cannot do is a basic piece of scientific and civic literacy.",
    objectives: [
      "Define intelligence and explain Spearman's g-factor",
      "Compare theories: g, Gardner's multiple intelligences, Sternberg's triarchic, emotional intelligence",
      "Describe the history of IQ testing from Binet to Wechsler",
      "Explain reliability, validity, and standardization",
      "Interpret IQ scores using the normal distribution",
      "Evaluate the nature-vs-nurture evidence on IQ",
      "Describe the Flynn effect and stereotype threat",
      "Identify non-cognitive traits (grit, conscientiousness, growth mindset) that predict achievement beyond IQ"
    ],
    prerequisites: ["Cognition, Language, and Creativity"],
    transfer: "Think about a domain where you excel and one where you struggle. To what extent is the gap IQ-shaped (raw cognitive ability) vs. knowledge/experience-shaped vs. motivation/grit-shaped? What does that suggest about how to improve the weaker domain?",
    bloomsLadder: {
      remember: "State the mean and standard deviation of IQ scores on the modern WAIS.",
      understand: "Explain why heritability within a group doesn't imply genetic causes of between-group differences.",
      apply: "Design a small study to test whether stereotype threat affects your classmates' performance on a test.",
      analyse: "Compare how IQ and grit would each predict success in a 5-year PhD program. Which matters more at which stage?",
      evaluate: "Assess the argument of The Bell Curve (1994) that IQ gaps between racial groups are substantially genetic. Where does the evidence break down?",
      create: "Propose three specific ways schools could use intelligence research that are supported by the evidence, and three that would NOT be supported."
    },
    tags: ["Intelligence", "Measurement", "Controversy"]
  },

  "Motivation and Emotion": {
    hook: "You probably know someone whose goals you can't understand — why they do what they do, chase what they chase, avoid what they avoid. Motivation and emotion research builds the framework for actually answering that question, including about yourself. Understand it well and you can design your environment and habits to actually support what you care about, rather than fighting them.",
    objectives: [
      "Compare drive-reduction, incentive, arousal, and hierarchy-of-needs theories of motivation",
      "Explain homeostasis and the Yerkes-Dodson law",
      "Describe the biology of hunger and the set-point theory",
      "Distinguish intrinsic and extrinsic motivation and describe the overjustification effect",
      "Identify the three needs in self-determination theory",
      "Compare James-Lange, Cannon-Bard, Schachter-Singer, and appraisal theories of emotion",
      "Explain universal facial expressions, cultural display rules, and emotional regulation strategies"
    ],
    prerequisites: ["Brain and Behavior"],
    transfer: "Pick a goal you want to pursue. Identify which motivational theory best describes your current drive (or lack of). Redesign your environment, rewards, and social context to support autonomy, competence, and relatedness. Run the redesign for two weeks and see what changes.",
    bloomsLadder: {
      remember: "List the five needs in Maslow's hierarchy, from bottom to top.",
      understand: "Explain why chronic loneliness has physical-health effects as large as smoking.",
      apply: "Given a student who studies hard only for the grade and stops the moment grades are removed, identify which motivational principle is at work and what a more sustainable design would look like.",
      analyse: "Compare how the James-Lange and Schachter-Singer theories would each explain your emotional response to almost being hit by a car.",
      evaluate: "Assess the evidence for Ekman's universal basic emotions. What criticisms have been raised and how strong are they?",
      create: "Design a 21-day program using self-determination theory to help someone build a new habit (exercise, writing, language learning)."
    },
    tags: ["Motivation", "Emotion", "Well-being"]
  },

  "Gender and Sexuality": {
    hook: "Almost every culture treats sex and gender as obvious, binary, and fixed. Biology is messier than that, gender identity is more variable than that, and sexual orientation is more continuous than that. Understanding the real picture is one of the most practical parts of psychology — for relationships, for health, for parenting, and for basic respect for human variety.",
    objectives: [
      "Distinguish sex, gender identity, gender role, and sexual orientation",
      "Describe intersex variation and multiple levels of biological sex",
      "Summarize what research shows about sex differences and their causes",
      "Explain the evidence on biological bases of sexual orientation",
      "Describe the Masters & Johnson sexual response cycle",
      "Compare Sternberg's three components of love and their different trajectories",
      "Explain the evidence-based approach to gender dysphoria and STI prevention"
    ],
    prerequisites: ["Brain and Behavior", "Child Development"],
    transfer: "Identify one assumption about sex or gender you inherited from your culture. Check whether it's actually supported by research. What would you tell a 10-year-old about sex, gender, and orientation that would hold up both scientifically and compassionately?",
    bloomsLadder: {
      remember: "Name four levels of biological sex (chromosomal, gonadal, hormonal, anatomical).",
      understand: "Explain why Hyde's gender similarities hypothesis matters for interpreting pop-culture claims about sex differences.",
      apply: "A 16-year-old cousin confides that they think they might be gay. Using what research shows, identify which pieces of common advice would be helpful and which would be harmful.",
      analyse: "Compare biological and social explanations for observed sex differences in interest in casual sex. What evidence supports each?",
      evaluate: "Assess the claim that 'conversion therapy' can change sexual orientation. What do major medical organizations say and why?",
      create: "Design a sex-education curriculum for 14-year-olds that integrates the research on sexual response, consent, STI prevention, and healthy relationships."
    },
    tags: ["Gender", "Sexuality", "Relationships"]
  },

  "Personality": {
    hook: "The way you habitually respond to the world — cheerful or irritable, curious or cautious, social or solitary — is more than a style; it predicts who you'll marry, how long you'll live, and what work will suit you. Personality psychology has built the best-supported trait model in the field, and understanding it can help you choose environments, partners, and careers that fit who you actually are rather than who you wish you were.",
    objectives: [
      "Compare trait, psychodynamic, humanistic, and social-cognitive theories of personality",
      "Define the Big Five and describe what each trait predicts",
      "Explain Freudian concepts (id, ego, superego, defense mechanisms) and evaluate their empirical status",
      "Describe Rogers's self-concept and the role of unconditional positive regard",
      "Explain Bandura's reciprocal determinism and self-efficacy",
      "Summarize the heritability of personality and implications for parenting",
      "Compare the strengths and limits of self-report, projective, and informant-based assessment"
    ],
    prerequisites: ["Child Development", "Motivation and Emotion"],
    transfer: "Take a free online Big Five assessment (e.g., IPIP-NEO). Reflect: which traits predict something you already know about yourself? Which surprised you? Pick one trait you'd like to shift and design a six-month habit plan targeting behaviors (not just intentions) that push in that direction.",
    bloomsLadder: {
      remember: "List the Big Five personality traits in OCEAN order.",
      understand: "Explain why conscientiousness predicts longevity even more strongly than IQ does.",
      apply: "Given a pair of friends who constantly conflict, identify which Big Five mismatches might be driving the friction.",
      analyse: "Compare how Freud, Rogers, and Bandura would each explain a chronic pattern of procrastination.",
      evaluate: "Assess the scientific validity of the Myers-Briggs Type Indicator vs. the NEO-PI-R. Why do researchers prefer one?",
      create: "Design a personality-informed career matching tool that uses the Big Five to suggest three professions likely to fit a user's trait profile."
    },
    tags: ["Personality", "Assessment", "Individual Differences"]
  },

  "Health, Stress, and Coping": {
    hook: "Chronic stress has mortality effects comparable to smoking 15 cigarettes a day — without the addiction or the lung cancer. Unlike smoking, stress sneaks up on you disguised as 'just how life is.' The research on what actually works against it is shockingly practical: build social support, move your body, sleep, reframe threats, and design environments that don't keep your nervous system in alarm mode.",
    objectives: [
      "Define stress, stressors, and the Lazarus appraisal model",
      "Distinguish acute, chronic, traumatic, daily, and anticipatory stressors",
      "Describe the sympathetic-adrenal-medullary and HPA axis stress pathways",
      "Explain Selye's General Adaptation Syndrome",
      "Summarize the evidence linking stress to cardiovascular, immune, and mental health",
      "Compare problem-focused and emotion-focused coping and when each fits",
      "Identify research-supported protective factors (social support, exercise, sleep, reappraisal, purpose)"
    ],
    prerequisites: ["Brain and Behavior", "Motivation and Emotion"],
    transfer: "Audit the chronic stressors in your current life. Classify each as controllable vs. uncontrollable. For controllable ones, design a problem-focused plan; for uncontrollable ones, pick an emotion-focused strategy. Then commit to one lifestyle change (sleep, exercise, social, or reappraisal) for 30 days.",
    bloomsLadder: {
      remember: "Name Selye's three stages of the General Adaptation Syndrome.",
      understand: "Explain why the Whitehall studies found that job autonomy predicts mortality independent of income.",
      apply: "Given a friend facing a chronic illness, which coping style would you recommend? Which specific strategies fit?",
      analyse: "Compare how the same event (losing a job) could produce dramatically different stress responses in two different people, using Lazarus's appraisal framework.",
      evaluate: "Assess the claim that meditation 'reduces stress.' What are the strongest findings and where does the evidence thin?",
      create: "Design a one-page stress-resilience protocol for a college student based on the strongest empirical research in the lesson."
    },
    tags: ["Health", "Stress", "Well-being"]
  },

  "Psychological Disorders": {
    hook: "About 1 in 5 adults will experience a mental disorder this year. 1 in 2 will over the course of a life. These are real, common, mostly treatable conditions — but they're still wrapped in stigma, confusion, and misinformation. Understanding what disorders actually are, how they're diagnosed, and what the evidence shows about causes is one of the most practical pieces of psychological literacy you can have, for yourself and the people you care about.",
    objectives: [
      "Apply the four D's (distress, dysfunction, deviance, danger) to evaluate disorder",
      "Describe the DSM-5 system and its strengths and limitations",
      "Distinguish major anxiety, mood, obsessive-compulsive, trauma-related, and psychotic disorders",
      "Explain the biopsychosocial model and the diathesis-stress framework",
      "Summarize what's known about common neurodevelopmental conditions (ADHD, autism)",
      "Identify suicide risk factors and evidence-based prevention strategies"
    ],
    prerequisites: ["Personality", "Health, Stress, and Coping"],
    transfer: "Pick one disorder covered here. Find a recent news article that mentions it. Evaluate the article's accuracy against what the evidence actually shows — are symptoms described accurately? Is stigma being reinforced or challenged? Is treatment correctly represented?",
    bloomsLadder: {
      remember: "State the four D's used to identify mental disorder.",
      understand: "Explain why comorbidity (multiple disorders in one person) is the rule rather than the exception.",
      apply: "A friend describes persistent low mood, lost interest, poor sleep, and thoughts of death for three weeks. Identify the likely disorder and the appropriate next step.",
      analyse: "Compare the biopsychosocial explanations for schizophrenia and major depression. Where are causes similar? Where different?",
      evaluate: "Assess the claim that the DSM 'medicalizes normal human experience.' What's the strongest version of this critique, and what's its strongest response?",
      create: "Design a stigma-reduction campaign for mental illness targeted at your school, workplace, or community, using the research on what actually reduces stigma."
    },
    tags: ["Disorders", "Diagnosis", "Clinical"]
  },

  "Therapies": {
    hook: "The question isn't whether therapy works — the evidence has settled that one: it does, with effects comparable to many medical treatments. The better questions are which therapy for which problem, what makes a good therapist, how medication fits in, and why the therapeutic relationship often matters more than the specific technique. Knowing the answers means getting better care if you ever need it and being a better support to someone who does.",
    objectives: [
      "Compare psychodynamic, humanistic, behavioral, cognitive, and third-wave therapies",
      "Identify the evidence-supported treatments for anxiety, depression, OCD, PTSD, and eating disorders",
      "Describe the main classes of psychiatric medications and what they treat",
      "Explain biomedical treatments beyond medication (ECT, TMS, DBS)",
      "Summarize the therapeutic alliance and common factors",
      "Evaluate the cultural fit of major therapies and the challenges of cross-cultural practice"
    ],
    prerequisites: ["Psychological Disorders"],
    transfer: "Imagine a close friend comes to you with symptoms of moderate depression and asks what kind of therapy to seek. Using the evidence in this lesson, how would you answer? What questions would they ask a potential therapist?",
    bloomsLadder: {
      remember: "Name the five major categories of psychotherapy.",
      understand: "Explain why exposure-based therapies work for phobias even though they initially increase distress.",
      apply: "Given a patient with treatment-resistant depression unresponsive to two medications and CBT, what are the next evidence-based options?",
      analyse: "Compare CBT and psychodynamic therapy: where do they overlap, where do they differ, and when might each be the better fit?",
      evaluate: "Assess the evidence for the 'Dodo-bird verdict' (all therapies are about equally effective). What's the strongest version and the strongest counter?",
      create: "Design an evidence-based treatment plan for a 28-year-old with moderate PTSD from a car accident. Specify which approaches, in what order, and why."
    },
    tags: ["Therapy", "Treatment", "Clinical"]
  },

  "Social Behavior": {
    hook: "If you had been in Milgram's experiment, you'd probably tell yourself you would have refused to obey. 65% of ordinary people didn't. Social psychology's deepest and most unsettling insight is that situations shape behavior far more than character, and the 'I would never' confidence almost everyone feels is mostly an illusion. The good news: knowing this lets you design situations — your own and your institutions' — that actually produce the behavior you want.",
    objectives: [
      "Describe conformity research (Asch) and distinguish normative from informational influence",
      "Summarize the Milgram obedience studies and what variables affect obedience",
      "Identify social facilitation, social loafing, deindividuation, and the bystander effect",
      "Explain group polarization and groupthink",
      "Describe attribution theory and common biases (FAE, actor-observer, self-serving, just-world)",
      "Explain cognitive dissonance theory with a classic experiment",
      "Compare central and peripheral routes to persuasion and identify Cialdini's six principles"
    ],
    prerequisites: ["Motivation and Emotion", "Personality"],
    transfer: "Identify a situation in your life where you didn't behave the way you'd have expected (a time you stayed silent, went along, didn't help, or conformed). Apply the concepts from this lesson. Which situational variables were shaping your behavior? How might a different setup have produced different behavior?",
    bloomsLadder: {
      remember: "Name the key finding of the Asch conformity experiments.",
      understand: "Explain why the bystander effect collapses when responsibility is individually assigned.",
      apply: "Design a classroom or workplace intervention that reduces social loafing using the research in this lesson.",
      analyse: "Compare how the Stanford Prison Experiment and the Milgram obedience studies each illustrate situational power, and where their critiques diverge.",
      evaluate: "Assess the ethical issues with the Milgram and Zimbardo studies. How have research ethics changed in response?",
      create: "Write a short explanation for a friend of why your political opponents aren't stupid or evil — using attribution theory and the fundamental attribution error."
    },
    tags: ["Social", "Groups", "Influence"]
  },

  "Attitudes, Culture, and Human Relations": {
    hook: "Prejudice doesn't come from ignorant bad people. It comes from basic cognitive shortcuts that every human mind uses — and without deliberate effort it arises almost automatically in any diverse group. Fortunately, psychology has identified specific conditions that actually reduce prejudice. Those conditions are what the most effective schools, workplaces, and societies get right.",
    objectives: [
      "Define attitudes and explain the ABC model",
      "Distinguish stereotypes, prejudice, and discrimination",
      "Identify the sources of prejudice — in-group bias, social identity, realistic conflict, scapegoating, learning",
      "Evaluate implicit bias research and its practical implications",
      "Describe the contact hypothesis and its supporting evidence",
      "Explain core principles of interpersonal attraction",
      "Identify major cultural dimensions and their psychological effects"
    ],
    prerequisites: ["Social Behavior"],
    transfer: "Pick one social group you encounter rarely. Identify the specific stereotypes you hold about them (honest self-reflection). Then set up an opportunity for real contact under contact-hypothesis conditions (equal status, shared goals). After a month, revisit your stereotypes.",
    bloomsLadder: {
      remember: "State Allport's four conditions for contact to reduce prejudice.",
      understand: "Explain why 'I don't see race' / color-blind approaches have weaker effects than multicultural approaches.",
      apply: "A company wants to reduce bias in hiring. Using the research, design three specific interventions beyond implicit-bias training.",
      analyse: "Compare realistic conflict theory and social identity theory as explanations for intergroup hostility.",
      evaluate: "Assess the evidence that the IAT predicts real-world discriminatory behavior.",
      create: "Design a diversity program for a university using evidence-based contact-hypothesis principles."
    },
    tags: ["Prejudice", "Culture", "Relationships"]
  },

  "Applied Psychology": {
    hook: "Everything you've learned so far is about the science. This last lesson is about the engineering — where that science shows up in hiring decisions, classrooms, courtrooms, sports arenas, hospital wards, office designs, apps, and policy. Applied psychology is the answer to 'so what?' for the entire field, and it's where you can use what you've learned even if you never call yourself a psychologist.",
    objectives: [
      "Survey the major applied subfields and their contributions",
      "Identify the strongest evidence-based predictors of job performance",
      "Summarize environmental psychology findings on attention, stress, and design",
      "Apply educational psychology principles to your own learning",
      "Describe sports psychology techniques (imagery, goal-setting, arousal regulation)",
      "Summarize forensic psychology findings on eyewitnesses, juries, and confessions",
      "Identify key principles of choice architecture and human-factors design"
    ],
    prerequisites: ["Social Behavior", "Attitudes, Culture, and Human Relations"],
    transfer: "Pick one environment you spend time in — your workplace, your school, your apartment. Identify three specific design or policy changes, supported by research from this lesson, that would likely produce measurable improvements in well-being, performance, or both. Propose them.",
    bloomsLadder: {
      remember: "Name the five features in Hackman & Oldham's Job Characteristics Model.",
      understand: "Explain why unstructured interviews predict performance so poorly despite being widely used.",
      apply: "Design a study strategy for your current course using the six best-supported learning principles in this lesson.",
      analyse: "Compare how environmental psychology and I-O psychology would each approach redesigning an office for better employee well-being.",
      evaluate: "Assess the ethical implications of behavioral-science-informed 'nudge' policies in government and tech.",
      create: "Choose one applied psychology subfield. Design a one-year project you could do in that field that would produce measurable public benefit."
    },
    tags: ["Application", "Workplace", "Real-world"]
  },

  "Advanced Psychoanalysis — Freud and Jung": {
    hook: "Freud and Jung shaped how we still think about the unconscious, dreams, and the self — even where their specific claims don't hold up under modern scrutiny. This lesson walks through the deeper concepts (defense mechanisms in detail, archetypes, transference, object relations) and clearly separates what's still useful from what's been left behind.",
    objectives: [
      "Explain the pleasure and reality principles and their role in Freud's structural model",
      "Identify and apply 10+ specific defense mechanisms",
      "Describe Freud's view of dreams (manifest, latent, dreamwork) and modern critiques",
      "Distinguish transference from countertransference",
      "Summarize Jung's analytical psychology (collective unconscious, archetypes, individuation)",
      "Evaluate the empirical status of major psychoanalytic claims"
    ],
    prerequisites: ["Personality", "Therapies"],
    transfer: "Identify a recent emotional reaction you had that seemed disproportionate. Run through the defense-mechanism list — projection, displacement, rationalization, etc. Could one of them be involved? What would the more direct (less defended) response look like?",
    bloomsLadder: {
      remember: "List 10 Freudian defense mechanisms.",
      understand: "Explain why sublimation is the only defense Freud considered fully adaptive.",
      apply: "A friend insists they don't care about an ex's wedding while obsessively talking about it. Identify the defense mechanism likely at play.",
      analyse: "Compare Freud's and Jung's views of the unconscious. Where do they overlap? Where do they diverge?",
      evaluate: "Assess the modern scientific status of the Oedipus complex, archetypes, and the death drive separately.",
      create: "Write a short example dialogue showing a therapist working with a client's transference in a way that's consistent with modern psychodynamic practice."
    },
    tags: ["Psychoanalysis", "Jung", "Therapy"]
  },

  "Advanced Behaviorism — Schedules and Therapies": {
    hook: "The behaviorist toolkit — schedules of reinforcement, counterconditioning, the Premack principle, token economies, ABA — is one of the most reliably effective parts of psychology. Whatever you think of behaviorism's philosophical limits, these tools change real behavior consistently across animals, children, adults, and your own habits.",
    objectives: [
      "Explain counterconditioning and how it differs from extinction",
      "Describe continuous vs. partial reinforcement and the partial-reinforcement extinction effect",
      "Apply the four reinforcement schedules to real-world behaviors",
      "Use the Premack principle in practical contexts",
      "Identify behavior chains and apply forward/backward chaining",
      "Describe the ABC framework of functional behavior analysis"
    ],
    prerequisites: ["Conditioning and Learning"],
    transfer: "Pick a behavior you'd like to change in yourself or someone else. Use the ABC framework: identify antecedents, the precise behavior, and the consequences that maintain it. Design an intervention that changes one or more of these.",
    bloomsLadder: {
      remember: "Name the four reinforcement schedules and the Premack principle.",
      understand: "Explain why slot machines are so addictive in terms of reinforcement schedules.",
      apply: "A child is afraid of dogs. Design a counterconditioning protocol that could reduce the fear.",
      analyse: "Compare the use of token economies in classroom management vs. addiction treatment.",
      evaluate: "Evaluate the ethical status of aversion therapy. Where is it appropriate, and where has it caused harm?",
      create: "Design a complete behavior-modification program for a habit you'd like to build, using FBA, scaffolding, and Premack principles."
    },
    tags: ["Behaviorism", "Behavior Change", "ABA"]
  },

  "Cognitive Frameworks for Learning": {
    hook: "If you understood every concept in the earlier cognition lesson, you've still only scratched the surface of how cognitive psychology applies to learning. This lesson covers the deeper frameworks — schemas, cognitive load, dual coding, metacognition, Bloom's taxonomy — that have transformed how educators design instruction and how good learners study.",
    objectives: [
      "Explain how schemas guide perception, attention, and memory",
      "Distinguish selective, divided, and sustained attention",
      "Apply cognitive load theory (intrinsic, extraneous, germane) to instructional design",
      "Use dual-coding theory and the multimedia principle",
      "Distinguish prospective from retrospective memory",
      "Apply Bloom's taxonomy to assess depth of learning"
    ],
    prerequisites: ["Memory", "Cognition, Language, and Creativity"],
    transfer: "Take a topic you're trying to learn. Audit it through cognitive-load theory: what's intrinsic, what's extraneous, where can you optimize? Add dual-coding (sketch a diagram). Use metacognitive checks (could I explain this to someone?). Notice the difference.",
    bloomsLadder: {
      remember: "Define schema, script, and the three types of cognitive load.",
      understand: "Explain why decorative illustrations in textbooks can hurt rather than help learning.",
      apply: "Redesign a confusing instructional document using cognitive-load and dual-coding principles.",
      analyse: "Compare metacognitive accuracy between strong and struggling students. What does this predict about long-term outcomes?",
      evaluate: "Assess Bloom's taxonomy as a curriculum design tool. What does it capture, and what does it miss?",
      create: "Design a 30-minute lesson on a topic you know well that explicitly targets all six Bloom's levels."
    },
    tags: ["Cognition", "Learning", "Education"]
  },

  "Social-Cognitive and Humanistic Deep Dives": {
    hook: "This final lesson connects two of psychology's most life-relevant traditions: how we develop through social interaction (Vygotsky, social cognition) and what conditions allow individuals to flourish (Rogers, Maslow, self-determination theory). It pulls together themes from across the curriculum into a closing perspective on growth, learning, and well-being.",
    objectives: [
      "Distinguish automatic from controlled social cognition",
      "Explain stereotyping and the out-group homogeneity effect",
      "Describe Festinger's social comparison and Homans's social exchange theories",
      "Identify Vygotsky's full social-learning architecture (ZPD, scaffolding, private speech, guided participation)",
      "Explain Rogers's actualizing tendency, conditions of worth, and the conditions for therapeutic growth",
      "Apply Maslow's distinction between deficiency and growth needs",
      "Use self-determination theory's three basic needs framework"
    ],
    prerequisites: ["Social Behavior", "Personality", "Motivation and Emotion"],
    transfer: "Audit your own life through self-determination theory. Where in your work and relationships are autonomy, competence, and relatedness genuinely supported? Where are they thwarted? Pick one place and design one specific change that better supports all three needs.",
    bloomsLadder: {
      remember: "List the three basic needs in self-determination theory and the three core therapist conditions in Rogers's model.",
      understand: "Explain why heavy social media use is linked to lower well-being using social comparison theory.",
      apply: "Design a workplace policy change that better supports SDT needs based on the research.",
      analyse: "Compare Vygotsky's view of learning with B.F. Skinner's. Where can each framework do work the other can't?",
      evaluate: "Assess the cross-cultural applicability of self-determination theory. Are autonomy, competence, and relatedness genuinely universal needs?",
      create: "Design a personal-growth program for the next year combining specific elements from this lesson — Vygotskian scaffolding, SDT-aligned environments, deliberate practice, peak-experience cultivation."
    },
    tags: ["Vygotsky", "Humanistic", "Growth"]
  },

};
