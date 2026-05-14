// Psychology curriculum based on Coon & Mitterer's Introduction to Psychology: Gateways to Mind and Behavior (11e)
// Each unit groups related chapters; each lesson = one chapter.
// Unit colors: variations on the pink → purple → indigo psychology palette.

const units = [
  { label:"Foundations", unitNum:1, gradient:"linear-gradient(135deg,#f48ca8,#c084fc)", shadow:"#7a3a8a",
    nodes:[
      {icon:"🔬",name:"Introduction to Psychology and Research Methods",sub:"What psychology is and how psychologists know what they know"},
      {icon:"🧠",name:"Brain and Behavior",sub:"Neurons, brain structures, and the nervous system"}
    ]},
  { label:"Human Development", unitNum:2, gradient:"linear-gradient(135deg,#e07d9b,#a78bfa)", shadow:"#603a8a",
    nodes:[
      {icon:"👶",name:"Child Development",sub:"Heredity, environment, and the growing mind"},
      {icon:"👴",name:"From Birth to Death: Life-Span Development",sub:"Adolescence, adulthood, aging, and well-being"}
    ]},
  { label:"Sensation, Perception & Consciousness", unitNum:3, gradient:"linear-gradient(135deg,#c084fc,#8b5cf6)", shadow:"#5a2890",
    nodes:[
      {icon:"👁️",name:"Sensation and Reality",sub:"How senses transform energy into experience"},
      {icon:"🎨",name:"Perceiving the World",sub:"Gestalt, attention, and perceptual construction"},
      {icon:"💤",name:"States of Consciousness",sub:"Sleep, dreams, hypnosis, and psychoactive drugs"}
    ]},
  { label:"Learning & Memory", unitNum:4, gradient:"linear-gradient(135deg,#a78bfa,#7c5fd0)", shadow:"#4a3080",
    nodes:[
      {icon:"🔔",name:"Conditioning and Learning",sub:"Classical, operant, and observational learning"},
      {icon:"💾",name:"Memory",sub:"Encoding, storage, retrieval, and forgetting"}
    ]},
  { label:"Thinking & Intelligence", unitNum:5, gradient:"linear-gradient(135deg,#d4a8ff,#9e6dd0)", shadow:"#5a2a8a",
    nodes:[
      {icon:"💭",name:"Cognition, Language, and Creativity",sub:"Concepts, problem-solving, and thought"},
      {icon:"🎯",name:"Intelligence",sub:"Measuring and understanding intelligence"}
    ]},
  { label:"Motivation, Emotion & Personality", unitNum:6, gradient:"linear-gradient(135deg,#ff8fcd,#c084fc)", shadow:"#7a2a8a",
    nodes:[
      {icon:"⚡",name:"Motivation and Emotion",sub:"Drives, needs, and emotional experience"},
      {icon:"💞",name:"Gender and Sexuality",sub:"Biological and psychological dimensions"},
      {icon:"🎭",name:"Personality",sub:"Trait, psychodynamic, humanistic, and behavioral views"}
    ]},
  { label:"Health & Disorders", unitNum:7, gradient:"linear-gradient(135deg,#f48ca8,#a78bfa)", shadow:"#702a70",
    nodes:[
      {icon:"🌡️",name:"Health, Stress, and Coping",sub:"Stressors, stress response, and coping strategies"},
      {icon:"🚨",name:"Psychological Disorders",sub:"Anxiety, mood, psychotic, and personality disorders"},
      {icon:"🛋️",name:"Therapies",sub:"Psychotherapy, behavioral, cognitive, and biomedical approaches"}
    ]},
  { label:"Social Psychology & Applications", unitNum:8, gradient:"linear-gradient(135deg,#c084fc,#7c5fd0)", shadow:"#4a2870",
    nodes:[
      {icon:"👥",name:"Social Behavior",sub:"Affiliation, attraction, conformity, and obedience"},
      {icon:"🌍",name:"Attitudes, Culture, and Human Relations",sub:"Persuasion, prejudice, and intergroup dynamics"},
      {icon:"🏢",name:"Applied Psychology",sub:"Work, environment, law, sports, and education"}
    ]},
  { label:"Advanced Concepts & Deeper Frameworks", unitNum:9, gradient:"linear-gradient(135deg,#ff8fcd,#a78bfa,#7c5fd0)", shadow:"#4a2880",
    nodes:[
      {icon:"🛋️",name:"Advanced Psychoanalysis — Freud and Jung",sub:"Defense mechanisms, dream analysis, archetypes, the collective unconscious"},
      {icon:"🔁",name:"Advanced Behaviorism — Schedules and Therapies",sub:"Counterconditioning, schedules, Premack, token economies, ABA"},
      {icon:"💡",name:"Cognitive Frameworks for Learning",sub:"Schemas, attention, cognitive load, metacognition, dual-coding"},
      {icon:"🌱",name:"Social-Cognitive and Humanistic Deep Dives",sub:"Vygotsky's scaffolding, social comparison, Rogers, Maslow's growth needs"}
    ]},
];
