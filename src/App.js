// A complete React Quiz App (mobile friendly) without TailwindCSS
// Uses basic CSS and React Hooks

import React, { useState, useEffect } from "react";
import "./App.css";

const rawQuestions = [
  {
  question: "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
  options: [
    "tick hunting",
    "auto grooming",
    "allo grooming",
    "foraging"
  ],
  answer: "allo grooming"
},
{
  question: "The scientific study of animal behaviour is called",
  options: [
    "behaviourism",
    "ecology",
    "ethology",
    "prey-predator dynamics"
  ],
  answer: "ethology"
},
{
  question: "Trampling of grass due to the movement of animals is an example of",
  options: [
    "mutualism",
    "amensalism",
    "commensalism",
    "protocooperation"
  ],
  answer: "amensalism"
},
{
  question: "Birds on giraffe are an example of",
  options: [
    "colony",
    "commensalism",
    "protocooperation",
    "allelopathy"
  ],
  answer: "commensalism"
},
{
  question: "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
  options: [
    "tick hunting",
    "auto grooming",
    "allo grooming",
    "foraging"
  ],
  answer: "allo grooming"
},
{
  question: "Hamilton's rule can be stated as",
  options: [
    "rB < C",
    "rB > C",
    "rB = C",
    "rB + C = 0"
  ],
  answer: "rB > C"
},
{
  question: "Egrets with buffaloes are an example of",
  options: [
    "colony",
    "commensalism",
    "protocooperation",
    "allelopathy"
  ],
  answer: "commensalism"
},
{
  question: "The interaction between exotic shrubs and trees through the action of seed predators is an example of",
  options: [
    "infraspecific competition",
    "apparent competition",
    "disguised competition",
    "harmonious competition"
  ],
  answer: "apparent competition"
},
{
  question: "Harmonious interactions occur where",
  options: [
    "at least one participant is benefited",
    "at least one participant is unharmed",
    "both participants are benefitted",
    "both participants are unharmed"
  ],
  answer: "both participants are unharmed"
},
{
  question: "An inventory of behaviours exhibited by an animal during a behaviour exercise is called",
  options: [
    "ecogram",
    "ethogram",
    "behaviourogram",
    "animalogram"
  ],
  answer: "ethogram"
},
{
  question: "If we all became vegetarians, we'll be able to support our large populations. This can be explained through",
  options: [
    "10% rule",
    "1% rule",
    "trophic cascade",
    "biodiversity"
  ],
  answer: "10% rule"
},
{
  question: "Net primary productivity is given by",
  options: [
    "APAR × LUE",
    "APAR + LUE",
    "APAR - LUE",
    "APAR / LUE"
  ],
  answer: "APAR × LUE"
},
{
  question: "Trees → Birds → Parasites → Hyperparasites represents",
  options: [
    "upright pyramid of numbers",
    "inverted pyramid of numbers",
    "spindle pyramid of numbers",
    "dumb-bell pyramid of numbers"
  ],
  answer: "inverted pyramid of numbers"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. As we move up the food chain,",
  options: [
    "available energy decreases",
    "available energy increases",
    "available energy remains same",
    "available energy is zero everywhere"
  ],
  answer: "available energy decreases"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
  options: [
    "frog is producer",
    "frog is consumer and carnivore",
    "frog is consumer and herbivore",
    "frog is decomposer"
  ],
  answer: "frog is consumer and carnivore"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
  options: [
    "more number of hawks than grasshoppers can be supported",
    "more number of grasshoppers than hawks can be supported",
    "equal number of hawks and grasshoppers can be supported",
    "none of these"
  ],
  answer: "more number of grasshoppers than hawks can be supported"
},
{
  question: "At the compensation point,",
  options: [
    "photosynthesis = respiration",
    "photosynthesis < respiration",
    "photosynthesis > respiration",
    "photosynthesis = 0"
  ],
  answer: "photosynthesis = respiration"
},
{
  question: "Glacial lakes are typical examples of",
  options: [
    "eutrophic lakes",
    "hypereutrophic lakes",
    "oligotrophic lakes",
    "mesotrophic lakes"
  ],
  answer: "oligotrophic lakes"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
  options: [
    "hawk is producer",
    "hawk is consumer and carnivore",
    "hawk is consumer and herbivore",
    "hawk is decomposer"
  ],
  answer: "hawk is consumer and carnivore"
},
{
  question: "Tree → Frugivorous birds → Hawk represents",
  options: [
    "upright pyramid of numbers",
    "inverted pyramid of numbers",
    "spindle pyramid of numbers",
    "dumb-bell pyramid of numbers"
  ],
  answer: "spindle pyramid of numbers"
},
{
  question: "Which of these is true?",
  options: [
    "Physiological longevity > Ecological longevity",
    "Physiological longevity = Ecological longevity",
    "Physiological longevity < Ecological longevity",
    "a or b"
  ],
  answer: "Physiological longevity > Ecological longevity"
},
{
  question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
  options: [
    "Simple random sampling",
    "Systematic sampling",
    "Stratified sampling",
    "Multistage sampling"
  ],
  answer: "Simple random sampling"
},
{
  question: "Cover board surveys are typically used for sampling",
  options: [
    "herpetofauna",
    "fishes",
    "large mammals",
    "carnivores"
  ],
  answer: "herpetofauna"
},
{
  question: "___ is how close the measured values are to the correct value.",
  options: [
    "Accuracy",
    "Precision",
    "Bias",
    "Variance"
  ],
  answer: "Accuracy"
},
{
  question: "The logistic growth equation, when plotted, appears",
  options: [
    "I shaped",
    "J shaped",
    "S shaped",
    "O shaped"
  ],
  answer: "S shaped"
},
{
  question: "The minimum replacement level fertility for a population to grow should be greater than",
  options: [
    "1",
    "2",
    "3",
    "4"
  ],
  answer: "2"
},
{
  question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
  options: [
    "100 births",
    "1000 births",
    "100 live births",
    "1000 live births"
  ],
  answer: "1000 live births"
},
{
  question: "___ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start.",
  options: [
    "Simple random sampling",
    "Systematic sampling",
    "Stratified sampling",
    "Multistage sampling"
  ],
  answer: "Systematic sampling"
},
{
  question: "Pan traps are used for sampling",
  options: [
    "bees",
    "butterflies",
    "non-pollinator insects",
    "pollinator insects"
  ],
  answer: "pollinator insects"
},
{
  question: "Which of these is not a measure of absolute population density?",
  options: [
    "total count",
    "pelt count",
    "capture-recapture method",
    "removal method"
  ],
  answer: "pelt count"
},
{
  question: "Which of these is correct?",
  options: [
    "Fundamental niche > Realised niche",
    "Fundamental niche = Realised niche",
    "Fundamental niche < Realised niche",
    "a or b"
  ],
  answer: "a or b"
},
{
  question: "Which of these is not a characteristic of pioneer species",
  options: [
    "ability to grow on bare rocks",
    "ability to tolerate extreme temperatures",
    "large size",
    "short life span"
  ],
  answer: "large size"
},
{
  question: "A climax caused by wildfires is an example of",
  options: [
    "climatic climax",
    "edaphic climax",
    "disclimax",
    "catastrophic climax"
  ],
  answer: "catastrophic climax"
},
{
  question: "Importance value varies from",
  options: [
    "0 to 10",
    "0 to 50",
    "0 to 100",
    "0 to 300"
  ],
  answer: "0 to 300"
},
{
  question: "When compared to generalist species, specialist species have",
  options: [
    "narrower niches",
    "broader niches",
    "same-size niches",
    "none of these"
  ],
  answer: "narrower niches"
},
{
  question: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
  options: [
    "climatic climax",
    "edaphic climax",
    "disclimax",
    "catastrophic climax"
  ],
  answer: "disclimax"
},
{
  question: "Lithosere is an example of",
  options: [
    "hydrosere",
    "xerosere",
    "psammosere",
    "halosere"
  ],
  answer: "xerosere"
},
{
  question: "A species found most frequently in a particular community, but also present occasionally in others is called",
  options: [
    "accidental species",
    "indifferent species",
    "selective species",
    "exclusive species"
  ],
  answer: "selective species"
},
{
  question: "Which of these depicts correctly the lithosere primary succession?",
  options: [
    "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
    "Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
    "Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax",
    "Rock → Crustose lichen → Foliose lichen → shrub → Herbaceous stage → Moss → woodland → climax"
  ],
  answer: "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax"
},
{
  question: "Importance value can be written as",
  options: [
    "Relative density + Relative frequency X Relative dominance",
    "Relative density X Relative frequency + Relative dominance",
    "Relative density + Relative frequency + Relative dominance",
    "Relative density X Relative frequency X Relative dominance"
  ],
  answer: "Relative density + Relative frequency + Relative dominance"
},
{
  question: "Which of these is not a physical factor of habitat?",
  options: [
    "soil",
    "moisture",
    "predators",
    "temperature"
  ],
  answer: "predators"
},
{
  question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
  options: [
    "translocation",
    "migration",
    "dispersal",
    "drifting"
  ],
  answer: "dispersal"
},
{
  question: "The movement of lions across the Gir landscape is an example of",
  options: [
    "diffusion",
    "secular dispersal",
    "jump dispersal",
    "drifting"
  ],
  answer: "diffusion"
},
{
  question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
  options: [
    "autophagy",
    "allelophagy",
    "autopathy",
    "allelopathy"
  ],
  answer: "allelopathy"
},
{
  question: "The regular, seasonal movement of animals, often along fixed routes is called",
  options: [
    "translocation",
    "migration",
    "dispersal",
    "drifting"
  ],
  answer: "migration"
},
{
  question: "\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",
  options: [
    "Liebig's law of the minimum",
    "Liebig's law of the maximum",
    "Shelford's law of tolerance",
    "Shelford's law of intolerance"
  ],
  answer: "Liebig's law of the minimum"
},
{
  question: "\"Quick movement over large distances, often across unsuitable terrain\" is a description of",
  options: [
    "diffusion",
    "secular dispersal",
    "jump dispersal",
    "drifting"
  ],
  answer: "jump dispersal"
},
{
  question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
  options: [
    "Liebig's law of the minimum",
    "Liebig's law of the maximum",
    "Shelford's law of tolerance",
    "Shelford's law of intolerance"
  ],
  answer: "Shelford's law of tolerance"
},
{
  question: "Good climate is a",
  options: [
    "chemical factor",
    "demographic factor",
    "push factor",
    "pull factor"
  ],
  answer: "pull factor"
},
{
  question: "Scarcity of food is a",
  options: [
    "chemical factor",
    "demographic factor",
    "push factor",
    "pull factor"
  ],
  answer: "push factor"
},
{
  question: "Zoo is an example of",
  options: [
    "in-situ conservation",
    "ex-situ conservation",
    "in-situ preservation",
    "ex-situ preservation"
  ],
  answer: "ex-situ conservation"
},
{
  question: "The \"subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of",
  options: [
    "habitat",
    "ecosystem",
    "biome",
    "biosphere"
  ],
  answer: "habitat"
},
{
  question: "Which of these correctly represents the process of habitat fragmentation and loss?",
  options: [
    "Original forest → Dissection → Perforation → Fragmentation → Attrition",
    "Original forest → Dissection → Attrition → Fragmentation → Perforation",
    "Original forest → Dissection → Perforation → Attrition → Fragmentation",
    "Original forest → Dissection → Fragmentation → Perforation → Attrition"
  ],
  answer: "Original forest → Dissection → Perforation → Fragmentation → Attrition"
},
{
  question: "The acronym HIPPO does not include",
  options: [
    "habitat loss",
    "invasive species",
    "pollination",
    "pollution"
  ],
  answer: "pollination"
},
{
  question: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
  options: [
    "very high",
    "medium",
    "very low",
    "non-existent"
  ],
  answer: "very high"
},
{
  question: "The acronym HIPPO does not include",
  options: [
    "habitat loss",
    "habitat enhancement",
    "invasive species",
    "human over-population"
  ],
  answer: "habitat enhancement"
},
{
  question: "According to Leopold, which of these is not a tool of habitat management?",
  options: [
    "fire",
    "gun",
    "cattle",
    "sickle"
  ],
  answer: "sickle"
},
{
  question: "Captive breeding is an example of",
  options: [
    "in-situ conservation",
    "ex-situ conservation",
    "in-situ preservation",
    "ex-situ preservation"
  ],
  answer: "ex-situ conservation"
},
{
  question: "Which of these is a stochastic factor?",
  options: [
    "birth rate",
    "death rate",
    "population structure",
    "environmental fluctuation"
  ],
  answer: "environmental fluctuation"
},
{
  question: "Which of these is a deterministic factor?",
  options: [
    "environmental variation",
    "forest fire",
    "death rate",
    "diseases"
  ],
  answer: "death rate"
},
{
  question: "Which of these is a positive check according to Malthus?",
  options: [
    "late marriage",
    "war",
    "celibacy",
    "moral restraint"
  ],
  answer: "war"
},
{
  question: "___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
  options: [
    "screening",
    "scoping",
    "reporting",
    "review"
  ],
  answer: "screening"
},
{
  question: "Which of these is a pillar of sustainability",
  options: [
    "social sustainability",
    "industrial sustainability",
    "agricultural sustainability",
    "trans-boundary sustainability"
  ],
  answer: "social sustainability"
},
{
  question: "Which of these is not a pillar of sustainability?",
  options: [
    "environmental sustainability",
    "economic sustainability",
    "trans-boundary sustainability",
    "social sustainability"
  ],
  answer: "trans-boundary sustainability"
},
{
  question: "The book \"An Essay on the Principle of Population\" was written by",
  options: [
    "Darwin",
    "Malthus",
    "Spencer",
    "Owens"
  ],
  answer: "Malthus"
},
{
  question: "According to Malthusian model,",
  options: [
    "Population grows in geometric progression, food supply increases in arithmetic progression",
    "Population grows in geometric progression, food supply increases in geometric progression",
    "Population grows in arithmetic progression, food supply increases in arithmetic progression",
    "Population grows in arithmetic progression, food supply increases in geometric progression"
  ],
  answer: "Population grows in geometric progression, food supply increases in arithmetic progression"
},
{
  question: "The quantum of human impacts is given by",
  options: [
    "I = P × A × T",
    "I = P + A + T",
    "I = P + A - T",
    "I = P - (A + T)"
  ],
  answer: "I = P × A × T"
},
{
  question: "___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
  options: [
    "screening",
    "scoping",
    "reporting",
    "review"
  ],
  answer: "scoping"
},
{
  question: "The demographic transition sees a society move from",
  options: [
    "high birth rate, low death rate to low birth rate, low death rate",
    "low birth rate, high death rate to low birth rate, low death rate",
    "high birth rate, high death rate to low birth rate, low death rate",
    "high birth rate, high death rate to low birth rate, high death rate"
  ],
  answer: "high birth rate, high death rate to low birth rate, low death rate"
},
{
  question: "Which of these is a preventive check according to Malthus?",
  options: [
    "foresight",
    "vice",
    "misery",
    "flood"
  ],
  answer: "foresight"
},
{
  question: "Which of these is not a climatic forcing for Earth?",
  options: [
    "changes in plate tectonics",
    "changes in Earth's orbit",
    "changes in Sun's orbit",
    "changes in Sun's strength"
  ],
  answer: "changes in Sun's orbit"
},
{
  question: "\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition for",
  options: [
    "adaptive response",
    "adaptive capacity",
    "mitigative response",
    "mitigative capacity"
  ],
  answer: "adaptive capacity"
},
{
  question: "Which of these is not a principle of ecological restoration?",
  options: [
    "ecological integrity",
    "short-term sustainability",
    "benefits and engages society",
    "informed by past and future"
  ],
  answer: "short-term sustainability"
},
{
  question: "Mesodebris in the context of plastic debris has fragments of size",
  options: [
    "> 20 mm",
    "5 - 20 mm",
    "< 5 mm",
    "< 1 mm"
  ],
  answer: "5 - 20 mm"
},
{
  question: "\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead\" is a definition for",
  options: [
    "adaptation",
    "mitigation",
    "maladaptation",
    "malmitigation"
  ],
  answer: "maladaptation"
},
{
  question: "Which of these is not a principle of ecological restoration?",
  options: [
    "ecological integrity",
    "long-term sustainability",
    "benefits and engages scientists",
    "informed by past and future"
  ],
  answer: "benefits and engages scientists"
},
{
  question: "Which of these is not a climatic forcing for Earth?",
  options: [
    "changes in plate tectonics",
    "changes in Earth's orbit",
    "changes in Moon's orbit",
    "changes in Sun's strength"
  ],
  answer: "changes in Moon's orbit"
},
{
  question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
  options: [
    "adaptation",
    "mitigation",
    "deceleration",
    "maladaptation"
  ],
  answer: "adaptation"
},
{
  question: "Macrodebris in the context of plastic debris has fragments of size",
  options: [
    "> 20 mm",
    "5 - 20 mm",
    "< 5 mm",
    "< 1 mm"
  ],
  answer: "> 20 mm"
},
{
  question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",
  options: [
    "adaptation",
    "mitigation",
    "deceleration",
    "maladaptation"
  ],
  answer: "mitigation"
},
{
  question: "Ludwig's ratchet predicts",
  options: [
    "decreasing harvesting rate",
    "constant harvesting rate",
    "increasing harvesting rate",
    "fluctuating harvesting rate"
  ],
  answer: "increasing harvesting rate"
},
{
  question: "A pest population is called controlled when",
  options: [
    "it is not increasing",
    "it is decreasing",
    "it is not causing any economic damage",
    "it is not causing excessive economic damage"
  ],
  answer: "it is not causing excessive economic damage"
},
{
  question: "Which of these is not an impact of toxic chemicals?",
  options: [
    "lethal effects",
    "sub-lethal effects",
    "reduction of existing stressors",
    "reduced fecundity"
  ],
  answer: "reduction of existing stressors"
},
{
  question: "Which of these is correct?",
  options: [
    "The maximum sustainable yield is near the beginning of the sigmoidal curve.",
    "The maximum sustainable yield is near the mid-point of the sigmoidal curve.",
    "The maximum sustainable yield is near the end of the sigmoidal curve.",
    "None of these."
  ],
  answer: "The maximum sustainable yield is near the mid-point of the sigmoidal curve."
},
{
  question: "A root zone treatment plant is an example of",
  options: [
    "phytoremediation",
    "biological control",
    "biomagnification",
    "bioaccumulation"
  ],
  answer: "phytoremediation"
},
{
  question: "A pest population is called uncontrolled when",
  options: [
    "it is increasing",
    "it is not decreasing",
    "it is causing some economic damage",
    "it is causing excessive economic damage"
  ],
  answer: "it is causing excessive economic damage"
},
{
  question: "The impact of El Nino on fishery collapse in Peru is explained by",
  options: [
    "match hypothesis",
    "mismatch hypothesis",
    "match-mismatch hypothesis",
    "none of these"
  ],
  answer: "match-mismatch hypothesis"
},
{
  question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
  options: [
    "recovery",
    "restoration",
    "enhancement",
    "replacement"
  ],
  answer: "restoration"
},
{
  question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
  options: [
    "recovery",
    "restoration",
    "enhancement",
    "replacement"
  ],
  answer: "enhancement"
},
{
  question: "Which of these is correct?",
  options: [
    "R + G = M + F",
    "R + M = G + F",
    "R + F = M + G",
    "R + G + M + F = 0"
  ],
  answer: "R + G = M + F"
},
  {
  question: "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
  options: [
    "tick hunting",
    "auto grooming",
    "allo grooming",
    "foraging"
  ],
  answer: "allo grooming"
},
{
  question: "The scientific study of animal behaviour is called",
  options: [
    "behaviourism",
    "ecology",
    "ethology",
    "prey-predator dynamics"
  ],
  answer: "ethology"
},
{
  question: "Trampling of grass due to the movement of animals is an example of",
  options: [
    "mutualism",
    "amensalism",
    "commensalism",
    "protocooperation"
  ],
  answer: "amensalism"
},
{
  question: "Birds on giraffe are an example of",
  options: [
    "colony",
    "commensalism",
    "protocooperation",
    "allelopathy"
  ],
  answer: "commensalism"
},
{
  question: "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
  options: [
    "tick hunting",
    "auto grooming",
    "allo grooming",
    "foraging"
  ],
  answer: "allo grooming"
},
{
  question: "Hamilton's rule can be stated as",
  options: [
    "rB < C",
    "rB > C",
    "rB = C",
    "rB + C = 0"
  ],
  answer: "rB > C"
},
{
  question: "Egrets with buffaloes are an example of",
  options: [
    "colony",
    "commensalism",
    "protocooperation",
    "allelopathy"
  ],
  answer: "commensalism"
},
{
  question: "The interaction between exotic shrubs and trees through the action of seed predators is an example of",
  options: [
    "infraspecific competition",
    "apparent competition",
    "disguised competition",
    "harmonious competition"
  ],
  answer: "apparent competition"
},
{
  question: "Harmonious interactions occur where",
  options: [
    "at least one participant is benefited",
    "at least one participant is unharmed",
    "both participants are benefitted",
    "both participants are unharmed"
  ],
  answer: "both participants are unharmed"
},
{
  question: "An inventory of behaviours exhibited by an animal during a behaviour exercise is called",
  options: [
    "ecogram",
    "ethogram",
    "behaviourogram",
    "animalogram"
  ],
  answer: "ethogram"
},
{
  question: "If we all became vegetarians, we'll be able to support our large populations. This can be explained through",
  options: [
    "10% rule",
    "1% rule",
    "trophic cascade",
    "biodiversity"
  ],
  answer: "10% rule"
},
{
  question: "Net primary productivity is given by",
  options: [
    "APAR × LUE",
    "APAR + LUE",
    "APAR - LUE",
    "APAR / LUE"
  ],
  answer: "APAR × LUE"
},
{
  question: "Trees → Birds → Parasites → Hyperparasites represents",
  options: [
    "upright pyramid of numbers",
    "inverted pyramid of numbers",
    "spindle pyramid of numbers",
    "dumb-bell pyramid of numbers"
  ],
  answer: "inverted pyramid of numbers"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. As we move up the food chain,",
  options: [
    "available energy decreases",
    "available energy increases",
    "available energy remains same",
    "available energy is zero everywhere"
  ],
  answer: "available energy decreases"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
  options: [
    "frog is producer",
    "frog is consumer and carnivore",
    "frog is consumer and herbivore",
    "frog is decomposer"
  ],
  answer: "frog is consumer and carnivore"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
  options: [
    "more number of hawks than grasshoppers can be supported",
    "more number of grasshoppers than hawks can be supported",
    "equal number of hawks and grasshoppers can be supported",
    "none of these"
  ],
  answer: "more number of grasshoppers than hawks can be supported"
},
{
  question: "At the compensation point,",
  options: [
    "photosynthesis = respiration",
    "photosynthesis < respiration",
    "photosynthesis > respiration",
    "photosynthesis = 0"
  ],
  answer: "photosynthesis = respiration"
},
{
  question: "Glacial lakes are typical examples of",
  options: [
    "eutrophic lakes",
    "hypereutrophic lakes",
    "oligotrophic lakes",
    "mesotrophic lakes"
  ],
  answer: "oligotrophic lakes"
},
{
  question: "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
  options: [
    "hawk is producer",
    "hawk is consumer and carnivore",
    "hawk is consumer and herbivore",
    "hawk is decomposer"
  ],
  answer: "hawk is consumer and carnivore"
},
{
  question: "Tree → Frugivorous birds → Hawk represents",
  options: [
    "upright pyramid of numbers",
    "inverted pyramid of numbers",
    "spindle pyramid of numbers",
    "dumb-bell pyramid of numbers"
  ],
  answer: "spindle pyramid of numbers"
},
{
  question: "Which of these is true?",
  options: [
    "Physiological longevity > Ecological longevity",
    "Physiological longevity = Ecological longevity",
    "Physiological longevity < Ecological longevity",
    "a or b"
  ],
  answer: "Physiological longevity > Ecological longevity"
},
{
  question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
  options: [
    "Simple random sampling",
    "Systematic sampling",
    "Stratified sampling",
    "Multistage sampling"
  ],
  answer: "Simple random sampling"
},
{
  question: "Cover board surveys are typically used for sampling",
  options: [
    "herpetofauna",
    "fishes",
    "large mammals",
    "carnivores"
  ],
  answer: "herpetofauna"
},
{
  question: "___ is how close the measured values are to the correct value.",
  options: [
    "Accuracy",
    "Precision",
    "Bias",
    "Variance"
  ],
  answer: "Accuracy"
},
{
  question: "The logistic growth equation, when plotted, appears",
  options: [
    "I shaped",
    "J shaped",
    "S shaped",
    "O shaped"
  ],
  answer: "S shaped"
},
{
  question: "The minimum replacement level fertility for a population to grow should be greater than",
  options: [
    "1",
    "2",
    "3",
    "4"
  ],
  answer: "2"
},
{
  question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
  options: [
    "100 births",
    "1000 births",
    "100 live births",
    "1000 live births"
  ],
  answer: "1000 live births"
},
{
  question: "___ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start.",
  options: [
    "Simple random sampling",
    "Systematic sampling",
    "Stratified sampling",
    "Multistage sampling"
  ],
  answer: "Systematic sampling"
},
{
  question: "Pan traps are used for sampling",
  options: [
    "bees",
    "butterflies",
    "non-pollinator insects",
    "pollinator insects"
  ],
  answer: "pollinator insects"
},
{
  question: "Which of these is not a measure of absolute population density?",
  options: [
    "total count",
    "pelt count",
    "capture-recapture method",
    "removal method"
  ],
  answer: "pelt count"
},
{
  question: "Which of these is correct?",
  options: [
    "Fundamental niche > Realised niche",
    "Fundamental niche = Realised niche",
    "Fundamental niche < Realised niche",
    "a or b"
  ],
  answer: "a or b"
},
{
  question: "Which of these is not a characteristic of pioneer species",
  options: [
    "ability to grow on bare rocks",
    "ability to tolerate extreme temperatures",
    "large size",
    "short life span"
  ],
  answer: "large size"
},
{
  question: "A climax caused by wildfires is an example of",
  options: [
    "climatic climax",
    "edaphic climax",
    "disclimax",
    "catastrophic climax"
  ],
  answer: "catastrophic climax"
},
{
  question: "Importance value varies from",
  options: [
    "0 to 10",
    "0 to 50",
    "0 to 100",
    "0 to 300"
  ],
  answer: "0 to 300"
},
{
  question: "When compared to generalist species, specialist species have",
  options: [
    "narrower niches",
    "broader niches",
    "same-size niches",
    "none of these"
  ],
  answer: "narrower niches"
},
{
  question: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
  options: [
    "climatic climax",
    "edaphic climax",
    "disclimax",
    "catastrophic climax"
  ],
  answer: "disclimax"
},
{
  question: "Lithosere is an example of",
  options: [
    "hydrosere",
    "xerosere",
    "psammosere",
    "halosere"
  ],
  answer: "xerosere"
},
{
  question: "A species found most frequently in a particular community, but also present occasionally in others is called",
  options: [
    "accidental species",
    "indifferent species",
    "selective species",
    "exclusive species"
  ],
  answer: "selective species"
},
{
  question: "Which of these depicts correctly the lithosere primary succession?",
  options: [
    "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
    "Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
    "Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax",
    "Rock → Crustose lichen → Foliose lichen → shrub → Herbaceous stage → Moss → woodland → climax"
  ],
  answer: "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax"
},
{
  question: "Importance value can be written as",
  options: [
    "Relative density + Relative frequency X Relative dominance",
    "Relative density X Relative frequency + Relative dominance",
    "Relative density + Relative frequency + Relative dominance",
    "Relative density X Relative frequency X Relative dominance"
  ],
  answer: "Relative density + Relative frequency + Relative dominance"
},
{
  question: "Which of these is not a physical factor of habitat?",
  options: [
    "soil",
    "moisture",
    "predators",
    "temperature"
  ],
  answer: "predators"
},
{
  question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
  options: [
    "translocation",
    "migration",
    "dispersal",
    "drifting"
  ],
  answer: "dispersal"
},
{
  question: "The movement of lions across the Gir landscape is an example of",
  options: [
    "diffusion",
    "secular dispersal",
    "jump dispersal",
    "drifting"
  ],
  answer: "diffusion"
},
{
  question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
  options: [
    "autophagy",
    "allelophagy",
    "autopathy",
    "allelopathy"
  ],
  answer: "allelopathy"
},
{
  question: "The regular, seasonal movement of animals, often along fixed routes is called",
  options: [
    "translocation",
    "migration",
    "dispersal",
    "drifting"
  ],
  answer: "migration"
},
{
  question: "\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",
  options: [
    "Liebig's law of the minimum",
    "Liebig's law of the maximum",
    "Shelford's law of tolerance",
    "Shelford's law of intolerance"
  ],
  answer: "Liebig's law of the minimum"
},
{
  question: "\"Quick movement over large distances, often across unsuitable terrain\" is a description of",
  options: [
    "diffusion",
    "secular dispersal",
    "jump dispersal",
    "drifting"
  ],
  answer: "jump dispersal"
},
{
  question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
  options: [
    "Liebig's law of the minimum",
    "Liebig's law of the maximum",
    "Shelford's law of tolerance",
    "Shelford's law of intolerance"
  ],
  answer: "Shelford's law of tolerance"
},
{
  question: "Good climate is a",
  options: [
    "chemical factor",
    "demographic factor",
    "push factor",
    "pull factor"
  ],
  answer: "pull factor"
},
{
  question: "Scarcity of food is a",
  options: [
    "chemical factor",
    "demographic factor",
    "push factor",
    "pull factor"
  ],
  answer: "push factor"
},
{
  question: "Zoo is an example of",
  options: [
    "in-situ conservation",
    "ex-situ conservation",
    "in-situ preservation",
    "ex-situ preservation"
  ],
  answer: "ex-situ conservation"
},
{
  question: "The \"subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of",
  options: [
    "habitat",
    "ecosystem",
    "biome",
    "biosphere"
  ],
  answer: "habitat"
},
{
  question: "Which of these correctly represents the process of habitat fragmentation and loss?",
  options: [
    "Original forest → Dissection → Perforation → Fragmentation → Attrition",
    "Original forest → Dissection → Attrition → Fragmentation → Perforation",
    "Original forest → Dissection → Perforation → Attrition → Fragmentation",
    "Original forest → Dissection → Fragmentation → Perforation → Attrition"
  ],
  answer: "Original forest → Dissection → Perforation → Fragmentation → Attrition"
},
{
  question: "The acronym HIPPO does not include",
  options: [
    "habitat loss",
    "invasive species",
    "pollination",
    "pollution"
  ],
  answer: "pollination"
},
{
  question: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
  options: [
    "very high",
    "medium",
    "very low",
    "non-existent"
  ],
  answer: "very high"
},
{
  question: "The acronym HIPPO does not include",
  options: [
    "habitat loss",
    "habitat enhancement",
    "invasive species",
    "human over-population"
  ],
  answer: "habitat enhancement"
},
{
  question: "According to Leopold, which of these is not a tool of habitat management?",
  options: [
    "fire",
    "gun",
    "cattle",
    "sickle"
  ],
  answer: "sickle"
},
{
  question: "Captive breeding is an example of",
  options: [
    "in-situ conservation",
    "ex-situ conservation",
    "in-situ preservation",
    "ex-situ preservation"
  ],
  answer: "ex-situ conservation"
},
{
  question: "Which of these is a stochastic factor?",
  options: [
    "birth rate",
    "death rate",
    "population structure",
    "environmental fluctuation"
  ],
  answer: "environmental fluctuation"
},
{
  question: "Which of these is a deterministic factor?",
  options: [
    "environmental variation",
    "forest fire",
    "death rate",
    "diseases"
  ],
  answer: "death rate"
},
{
  question: "Which of these is a positive check according to Malthus?",
  options: [
    "late marriage",
    "war",
    "celibacy",
    "moral restraint"
  ],
  answer: "war"
},
{
  question: "___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
  options: [
    "screening",
    "scoping",
    "reporting",
    "review"
  ],
  answer: "screening"
},
{
  question: "Which of these is a pillar of sustainability",
  options: [
    "social sustainability",
    "industrial sustainability",
    "agricultural sustainability",
    "trans-boundary sustainability"
  ],
  answer: "social sustainability"
},
{
  question: "Which of these is not a pillar of sustainability?",
  options: [
    "environmental sustainability",
    "economic sustainability",
    "trans-boundary sustainability",
    "social sustainability"
  ],
  answer: "trans-boundary sustainability"
},
{
  question: "The book \"An Essay on the Principle of Population\" was written by",
  options: [
    "Darwin",
    "Malthus",
    "Spencer",
    "Owens"
  ],
  answer: "Malthus"
},
{
  question: "According to Malthusian model,",
  options: [
    "Population grows in geometric progression, food supply increases in arithmetic progression",
    "Population grows in geometric progression, food supply increases in geometric progression",
    "Population grows in arithmetic progression, food supply increases in arithmetic progression",
    "Population grows in arithmetic progression, food supply increases in geometric progression"
  ],
  answer: "Population grows in geometric progression, food supply increases in arithmetic progression"
},
{
  question: "The quantum of human impacts is given by",
  options: [
    "I = P × A × T",
    "I = P + A + T",
    "I = P + A - T",
    "I = P - (A + T)"
  ],
  answer: "I = P × A × T"
},
{
  question: "___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
  options: [
    "screening",
    "scoping",
    "reporting",
    "review"
  ],
  answer: "scoping"
},
{
  question: "The demographic transition sees a society move from",
  options: [
    "high birth rate, low death rate to low birth rate, low death rate",
    "low birth rate, high death rate to low birth rate, low death rate",
    "high birth rate, high death rate to low birth rate, low death rate",
    "high birth rate, high death rate to low birth rate, high death rate"
  ],
  answer: "high birth rate, high death rate to low birth rate, low death rate"
},
{
  question: "Which of these is a preventive check according to Malthus?",
  options: [
    "foresight",
    "vice",
    "misery",
    "flood"
  ],
  answer: "foresight"
},
{
  question: "Which of these is not a climatic forcing for Earth?",
  options: [
    "changes in plate tectonics",
    "changes in Earth's orbit",
    "changes in Sun's orbit",
    "changes in Sun's strength"
  ],
  answer: "changes in Sun's orbit"
},
{
  question: "\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition for",
  options: [
    "adaptive response",
    "adaptive capacity",
    "mitigative response",
    "mitigative capacity"
  ],
  answer: "adaptive capacity"
},
{
  question: "Which of these is not a principle of ecological restoration?",
  options: [
    "ecological integrity",
    "short-term sustainability",
    "benefits and engages society",
    "informed by past and future"
  ],
  answer: "short-term sustainability"
},
{
  question: "Mesodebris in the context of plastic debris has fragments of size",
  options: [
    "> 20 mm",
    "5 - 20 mm",
    "< 5 mm",
    "< 1 mm"
  ],
  answer: "5 - 20 mm"
},
{
  question: "\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead\" is a definition for",
  options: [
    "adaptation",
    "mitigation",
    "maladaptation",
    "malmitigation"
  ],
  answer: "maladaptation"
},
{
  question: "Which of these is not a principle of ecological restoration?",
  options: [
    "ecological integrity",
    "long-term sustainability",
    "benefits and engages scientists",
    "informed by past and future"
  ],
  answer: "benefits and engages scientists"
},
{
  question: "Which of these is not a climatic forcing for Earth?",
  options: [
    "changes in plate tectonics",
    "changes in Earth's orbit",
    "changes in Moon's orbit",
    "changes in Sun's strength"
  ],
  answer: "changes in Moon's orbit"
},
{
  question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
  options: [
    "adaptation",
    "mitigation",
    "deceleration",
    "maladaptation"
  ],
  answer: "adaptation"
},
{
  question: "Macrodebris in the context of plastic debris has fragments of size",
  options: [
    "> 20 mm",
    "5 - 20 mm",
    "< 5 mm",
    "< 1 mm"
  ],
  answer: "> 20 mm"
},
{
  question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",
  options: [
    "adaptation",
    "mitigation",
    "deceleration",
    "maladaptation"
  ],
  answer: "mitigation"
},
{
  question: "Ludwig's ratchet predicts",
  options: [
    "decreasing harvesting rate",
    "constant harvesting rate",
    "increasing harvesting rate",
    "fluctuating harvesting rate"
  ],
  answer: "increasing harvesting rate"
},
{
  question: "A pest population is called controlled when",
  options: [
    "it is not increasing",
    "it is decreasing",
    "it is not causing any economic damage",
    "it is not causing excessive economic damage"
  ],
  answer: "it is not causing excessive economic damage"
},
{
  question: "Which of these is not an impact of toxic chemicals?",
  options: [
    "lethal effects",
    "sub-lethal effects",
    "reduction of existing stressors",
    "reduced fecundity"
  ],
  answer: "reduction of existing stressors"
},
{
  question: "Which of these is correct?",
  options: [
    "The maximum sustainable yield is near the beginning of the sigmoidal curve.",
    "The maximum sustainable yield is near the mid-point of the sigmoidal curve.",
    "The maximum sustainable yield is near the end of the sigmoidal curve.",
    "None of these."
  ],
  answer: "The maximum sustainable yield is near the mid-point of the sigmoidal curve."
},
{
  question: "A root zone treatment plant is an example of",
  options: [
    "phytoremediation",
    "biological control",
    "biomagnification",
    "bioaccumulation"
  ],
  answer: "phytoremediation"
},
{
  question: "A pest population is called uncontrolled when",
  options: [
    "it is increasing",
    "it is not decreasing",
    "it is causing some economic damage",
    "it is causing excessive economic damage"
  ],
  answer: "it is causing excessive economic damage"
},
{
  question: "The impact of El Nino on fishery collapse in Peru is explained by",
  options: [
    "match hypothesis",
    "mismatch hypothesis",
    "match-mismatch hypothesis",
    "none of these"
  ],
  answer: "match-mismatch hypothesis"
},
{
  question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
  options: [
    "recovery",
    "restoration",
    "enhancement",
    "replacement"
  ],
  answer: "restoration"
},
{
  question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
  options: [
    "recovery",
    "restoration",
    "enhancement",
    "replacement"
  ],
  answer: "enhancement"
},
{
  question: "Which of these is correct?",
  options: [
    "R + G = M + F",
    "R + M = G + F",
    "R + F = M + G",
    "R + G + M + F = 0"
  ],
  answer: "R + G = M + F"
}
    

  
];

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
function App() {
  // -------------------
  // State Declarations
  // -------------------
  const [startTime, setStartTime] = useState(null);
  const [pastScores, setPastScores] = useState(() => JSON.parse(localStorage.getItem("quizScores")) || []);
  const [endTime, setEndTime] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizMode, setQuizMode] = useState("welcome");
  const [questionsCount, setQuestionsCount] = useState(20);
  const [showHint, setShowHint] = useState(false);

  // -------------------
  // Timer State
  // -------------------
  const [timeLeft, setTimeLeft] = useState(null);

  // -------------------
  // Effects
  // -------------------
  // Load scores
  useEffect(() => {
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      setPastScores(JSON.parse(savedScores));
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (quizMode === "quiz" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (quizMode === "quiz" && timeLeft === 0) {
      setShowResults(true);
      setEndTime(Date.now());
      setQuizMode("results");
    }
  }, [timeLeft, quizMode]);

  // -------------------
  // startQuiz Function
  // -------------------
  const startQuiz = (count = 20) => {
    const shuffledQuestions = shuffle([...rawQuestions]);
    setQuestions(shuffledQuestions.slice(0, count));
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setStartTime(Date.now());
    setEndTime(null);
    setQuizMode("quiz");
    setTimeLeft(600); // Start with 10 minutes
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    const correctAnswer = questions[currentQuestion].answer;
    const isAnswerCorrect = selectedOption === correctAnswer;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      setUserAnswers([...userAnswers, selectedOption]);
      setSelectedOption(null);
      
      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
      } else {
        setShowResults(true);
        const end = Date.now();
        setEndTime(end);
        setQuizMode("results");
        
        const newEntry = {
          score: score + (isAnswerCorrect ? 1 : 0),
          total: questions.length,
          time: Math.round((end - startTime) / 1000),
          date: new Date().toLocaleString()
        };
        
        const updatedScores = [newEntry, ...pastScores];
        setPastScores(updatedScores);
        localStorage.setItem("quizScores", JSON.stringify(updatedScores));
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setQuizMode("welcome");
  };

  const score = userAnswers.reduce((acc, ans, index) => {
    return ans === questions[index].answer ? acc + 1 : acc;
  }, 0);

  const wrongAnswers = questions.filter((q, i) => userAnswers[i] !== q.answer);

  // Calculate progress percentage
  const progressPercentage = (currentQuestion / questions.length) * 100;
  
  const renderQuizSection = () => {
    if (quizMode === "welcome") {
      return (
        <div className="welcome-screen">
          <h2>Welcome to 	
Wild Life Ecology Quiz</h2>
          <p>Practice assessment questions on 	
Wild Life Ecology Quiz</p>
          
          <div className="quiz-options">
            <div className="question-count">
              <h3>How many questions?</h3>
              <div className="count-buttons">
                <button 
                  className={questionsCount === 10 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(10)}
                >
                  10
                </button>
                <button 
                  className={questionsCount === 20 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(20)}
                >
                  20
                </button>
                <button 
                  className={questionsCount === 50 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(50)}
                >
                  50
                </button>
                <button 
                  className={questionsCount === rawQuestions.length ? "selected" : ""} 
                  onClick={() => setQuestionsCount(rawQuestions.length)}
                >
                  All ({rawQuestions.length})
                </button>
              </div>
            </div>
            
            <button className="start-button" onClick={() => startQuiz(questionsCount)}>
              Start Quiz
            </button>
          </div>
          
          {pastScores.length > 0 && (
            <div className="past-scores-preview">
              <h3>Previous Best: {Math.max(...pastScores.map(score => (score.score/score.total) * 100)).toFixed(0)}%</h3>
              <p>You've taken this quiz {pastScores.length} times</p>
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "quiz") {
      return (
        <div className="quiz-box">
          <div className="quiz-header">
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          
          {questions[currentQuestion] && (
            <div className={`question-container ${showFeedback ? (isCorrect ? "correct-feedback" : "incorrect-feedback") : ""}`}>
              <h2 className="question-text">{questions[currentQuestion].question}</h2>
              
              <div className="options-container">
                {questions[currentQuestion].options.map((opt) => (
                  <button
                    key={opt}
                    className={`option-button ${selectedOption === opt ? "selected" : ""}`}
                    onClick={() => handleOptionSelect(opt)}
                    disabled={showFeedback}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              
              {showFeedback && (
                <div className="feedback">
                  {isCorrect ? (
                    <div className="correct">Correct!</div>
                  ) : (
                    <div className="incorrect">
                      
                      <h>{questions[currentQuestion].answer} </h>
                    </div>
                  )}
                </div>
              )}
              
              {!showFeedback && (
                <div className="control-buttons">
                  <button 
                    className="hint-button"
                    onClick={() => setShowHint(!showHint)}
                  >
                    {showHint ? "Hide Hint" : "Need a Hint?"}
                  </button>
                  
                  <button
                    className={`submit-button ${selectedOption ? "active" : ""}`}
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Submit Answer
                  </button>
                </div>
              )}
              
              {showHint && (
                <div className="hint-box">
                    <h>{questions[currentQuestion].answer} </h>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "results") {
      const percentage = (score / questions.length) * 100;
      let feedback;
      
      if (percentage >= 90) {
        feedback = "Outstanding! You're an expert in Conservation Economics!";
      } else if (percentage >= 70) {
        feedback = "Great job! You have a solid understanding of the subject.";
      } else if (percentage >= 50) {
        feedback = "Good effort! Keep learning to improve your knowledge.";
      } else {
        feedback = "You might want to review the material again.";
      }
      
      return (
        <div className="result-box">
          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <h2 className="score-percentage">{percentage.toFixed(1)}%</h2>
          </div>
          
          <p className="score-feedback">{feedback}</p>
          
          {startTime && endTime && (
            <p className="time-taken">
              Time Taken: {(() => {
                const totalSeconds = Math.round((endTime - startTime) / 1000); 
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
              })()}
            </p>
          )}
          
          {wrongAnswers.length > 0 && (
            <div className="wrong-answers">
              <h3>Questions to Review:</h3>
              <div className="wrong-answers-list">
                {wrongAnswers.map((q, i) => (
                  <div key={i} className="wrong-answer-item">
                    <div className="question">{q.question}</div>
                    <div className="answers">
                      <div className="user-answer">
                        Your Answer: <span className="incorrect">{userAnswers[questions.indexOf(q)]}</span>
                      </div>
                      <div className="correct-answer">
                        Correct Answer: <span className="correct">{q.answer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="result-buttons">
            <button className="restart-button" onClick={restartQuiz}>
              Back to Menu
            </button>
            <button className="retry-button" onClick={() => startQuiz(questions.length)}>
              Try Again
            </button>
          </div>
          
          <div className="past-scores">
            <h3>Your History:</h3>
            <div className="scores-table">
              <div className="table-header">
                <div className="date-cell">Date</div>
                <div className="score-cell">Score</div>
                <div className="time-cell">Time</div>
              </div>
              {pastScores.slice(0, 5).map((entry, idx) => (
                <div key={idx} className="table-row">
                  <div className="date-cell">{entry.date}</div>
                  <div className="score-cell">{entry.score}/{entry.total} ({((entry.score/entry.total)*100).toFixed(0)}%)</div>
                  <div className="time-cell">{entry.time}s</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="quiz-app-container">
      <header>
        <h1>WildLife Ecology Quiz</h1>
      </header>
      <main>
        {renderQuizSection()}
      </main>
      <footer>
        <p>Practice assessment Questions on WildLife Ecology  </p>
        <div className="disclaimer">
        {/* <p><em>Note: This quiz was generated using ChatGPT for educational and revision purposes. We are not responsible for any incorrect answers. Please verify with official sources when in doubt.</em></p> */}
      </div>
      </footer>
      
    </div>
    
  );
}

export default App;