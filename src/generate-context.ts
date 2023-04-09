// Define a type for the parameters
type Params = {
  description: string;
  format: string;
  style: string;
  length: string;
  tone: string;
};

// Define a function that returns a string based on the parameters
export function generateContext(params: Params): string {
  // Initialize an empty string
  let context = '';
  // Add the description of the content by the user
  context += `Write a ${params.format} based on the description provided by the user.\n`;
  // Add the style of the content
  context += `The style of the ${params.format} should be ${params.style}. This means that it should `;
  // Use different phrases for different styles
  switch (params.style) {
    case 'professional':
      context += `use clear and concise language, avoid jargon and slang, and follow the conventions of the field or industry.\n`;
      break;
    case 'casual':
      context += `use informal and conversational language, include personal pronouns and contractions, and express opinions and emotions.\n`;
      break;
    case 'formal':
      context += `use polite and respectful language, avoid personal pronouns and contractions, and follow the rules of grammar and punctuation.\n`;
      break;
    case 'persuasive':
      context += `use rhetorical devices, such as ethos, logos, and pathos, to convince the audience of a certain point of view or action.\n`;
      break;
    case 'informative':
      context += `use factual and objective language, provide evidence and sources, and explain the topic or issue in detail.\n`;
      break;
    case 'narrative':
      context += `use storytelling elements, such as characters, plot, setting, dialogue, and conflict, to create an engaging and immersive story.\n`;
      break;
    case 'descriptive':
      context += `use sensory details, imagery, figurative language, and vivid words to describe a person, place, thing, or experience.\n`;
      break;
    case 'expository':
      context += `use logical and analytical language, provide definitions and examples, and organize the information in a clear and coherent way.\n`;
      break;
    case 'creative':
      context += `use original and imaginative language, experiment with different forms and genres, and express a unique voice and perspective.\n`;
      break;
    case 'academic':
      context += `use scholarly and academic language, follow the specific citation style and format, and demonstrate critical thinking and research skills.\n`;
      break;
    case 'technical':
      context += `use precise and technical language, follow the specific instructions and guidelines, and provide accurate and reliable information.\n`;
      break;
    case 'journalistic':
      context += `use factual and unbiased language, follow the inverted pyramid structure, and answer the five Ws (who, what, when, where, why) and how.\n`;
      break;
    case 'poetic':
      context += `use rhythmic and musical language, employ poetic devices, such as rhyme, meter, metaphor, simile, alliteration, etc., and convey a theme or message.\n`;
      break;
    default:
      context += `not match any predefined style.\n`;
  }
  // Add the length of the content
  context += `The length of the ${params.format} should be ${params.length}. This means that it should `;
  // Use different phrases for different lengths
  switch (params.length) {
    case 'short':
      context += `contain only the essential information or points, be concise and direct, and fit within a single page or screen.\n`;
      break;
    case 'medium':
      context += `contain enough information or points to cover the topic or issue adequately, be clear and coherent, and fit within a few pages or screens.\n`;
      break;

    case 'long':
      context += `contain comprehensive and detailed information or points to cover the topic or issue thoroughly, be well-structured and organized, and fit within several pages or screens.\n`;
      break;
    default:
      context += `not match any predefined length.\n`;
  }
  // Add the tone of the content
  context += `The tone of the ${params.format} should be ${params.tone}. This means that it should `;
  // Use different phrases for different tones
  switch (params.tone) {
    case 'neutral':
      context += `use a balanced and impartial language, avoid emotional or biased words, and present the information or points fairly and objectively.\n`;
      break;
    case 'humorous':
      context += `use a witty and amusing language, include jokes, puns, irony, sarcasm, etc., and make the audience laugh or smile.\n`;
      break;
    case 'serious':
      context += `use a grave and solemn language, avoid jokes, puns, irony, sarcasm, etc., and make the audience think or feel deeply.\n`;
      break;
    case 'sarcastic':
      context += `use a mocking and ironic language, include jokes, puns, irony, sarcasm, etc., and make the audience laugh or cringe.\n`;
      break;
    case 'friendly':
      context += `use a warm and cordial language, include compliments, greetings, expressions of gratitude, etc., and make the audience feel welcome and appreciated.\n`;
      break;
    case 'angry':
      context += `use a harsh and hostile language, include insults, threats, complaints, etc., and make the audience feel offended or intimidated.\n`;
      break;
    case 'informative':
      context += `use a clear and concise language, include facts, figures, examples, etc., and make the audience learn or understand something new or important.\n`;
      break;
    case 'persuasive':
      context += `use a convincing and compelling language, include arguments, evidence, appeals to emotion or logic, etc., and make the audience agree or act on something.\n`;
      break;
    case 'poetic':
      context += `use a lyrical and expressive language, include imagery, figurative language, sound devices, etc., and make the audience appreciate the beauty or meaning of something.\n`;
      break;
    case 'suspenseful':
      context += `use a tense and thrilling language, include cliffhangers, twists, foreshadowing, etc., and make the audience curious or anxious about what will happen next.\n`;
      break;
    case 'inspirational':
      context += `use a positive and uplifting language, include quotes, stories, anecdotes, etc., and make the audience feel motivated or encouraged to do something.\n`;
      break;
    default:
      context += `not match any predefined tone.\n`;
  }
  // Return the context string
  return context;
}
