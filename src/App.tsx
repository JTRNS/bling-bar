import { useCallback, useState } from 'react';
import FormatSelect from './components/format-select/format-select';
import {
  ArticleIcon,
  FormatIcon,
  FriendsIcon,
  PenIcon,
  SpeakerIcon,
} from './components/icons/icons';
import InputArea from './components/input-area/input-area';
import InputBlur from './components/input-blur/input-blur';
import InputSection from './components/input-section/input-section';
import OptionPicker from './components/option-picker/option-picker';
import { generateContext } from './generate-context';

const PROMPT_PLACEHOLDERS = [
  'Write a catchy slogan for a product',
  'Summarize a long article in a paragraph',
  'Generate a plot outline for a novel',
  'Compose a thank-you note for a gift',
  'Write a catchy headline for a blog post',
  'Generate a list of keywords for SEO',
];

const TONE_OPTIONS = [
  {
    name: 'neutral',
    value:
      'Use a neutral tone that uses impartial, balanced, or unbiased language to present facts or opinions without taking sides',
  },
  {
    name: 'humorous',
    value:
      'Use a humorous tone that uses humor, such as jokes, irony, or exaggeration, to make the reader laugh or smile',
  },
  {
    name: 'serious',
    value:
      'Use a serious tone that uses formal, factual, or respectful language to convey a sense of importance or urgency',
  },
  {
    name: 'sarcastic',
    value:
      'Use a sarcastic tone that uses irony, mockery, or ridicule to express contempt or criticism',
  },
  {
    name: 'friendly',
    value:
      'Use a friendly tone that uses warm, polite, or casual language to create a positive and personal connection with the reader',
  },
  {
    name: 'angry',
    value:
      'Use an angry tone that uses harsh, rude, or aggressive language to express displeasure or frustration',
  },
  {
    name: 'informative',
    value:
      'Use an informative tone that uses clear, concise, and objective language to provide useful information or explanations',
  },
  {
    name: 'persuasive',
    value:
      "Use a persuasive tone that uses convincing, emotional, or logical language to influence the reader's opinion or action",
  },
  {
    name: 'poetic',
    value:
      'Use a poetic tone that uses figurative, expressive, or musical language to create a vivid or aesthetic effect',
  },
  {
    name: 'suspenseful',
    value:
      'Use a suspenseful tone that uses mystery, tension, or uncertainty to keep the reader interested or curious',
  },
  {
    name: 'inspirational',
    value:
      'Use an inspirational tone that uses positive, uplifting, or motivational language to encourage the reader or celebrate their achievements',
  },
];

const WRITING_STYLES = [
  {
    name: 'professional',
    value:
      'Use formal language and avoid slang or contractions. Be clear and concise and follow the conventions of the medium. Provide relevant information and evidence to support your claims.',
  },
  {
    name: 'casual',
    value:
      'Use informal language and feel free to use slang or contractions. Be friendly and expressive and follow your own voice. Share your opinions and emotions and use humor if appropriate.',
  },
  {
    name: 'formal',
    value:
      'Use polite and respectful language and avoid colloquialisms or idioms. Be precise and logical and follow the rules of grammar and punctuation. Provide references and citations for your sources.',
  },
  {
    name: 'persuasive',
    value:
      "Use emotive and convincing language and appeal to the reader's values or emotions. Be assertive and confident and follow the structure of introduction, body and conclusion. Provide reasons and examples to support your arguments.",
  },
  {
    name: 'informative',
    value:
      'Use clear and factual language and inform the reader about a topic or issue. Be objective and neutral and follow the structure of introduction, body and conclusion. Provide facts and statistics to support your information.',
  },
  {
    name: 'narrative',
    value:
      'Use storytelling and chronological language and narrate a series of events or experiences. Be creative and engaging and follow the elements of plot, setting, character, conflict and resolution. Provide dialogue and description to make your story vivid.',
  },
  {
    name: 'descriptive',
    value:
      "Use vivid language and sensory details to create a picture in the reader's mind. Be creative and imaginative and follow the mood of the tone. Show rather than tell and use metaphors or similes if appropriate.",
  },
  {
    name: 'expository',
    value:
      'Use explanatory and analytical language and explain a topic or issue. Be informative and organized and follow the structure of introduction, body and conclusion. Provide definitions, examples, comparisons or contrasts to support your explanation.',
  },
  {
    name: 'creative',
    value:
      'Use original and expressive language and explore a topic or issue in a novel way. Be inventive and artistic and follow your own style or voice. Provide imagery, symbolism, irony or other literary devices to enhance your writing.',
  },
  {
    name: 'academic',
    value:
      'Use scholarly and academic language and demonstrate your knowledge or research on a topic or issue. Be rigorous and critical and follow the conventions of citation, referencing, formatting and style. Provide arguments, evidence, analysis or evaluation to support your writing.',
  },
  {
    name: 'technical',
    value:
      'Use precise and technical language and communicate information or instructions on a specific topic or issue. Be accurate and concise and follow the standards of clarity, consistency, completeness and correctness. Provide diagrams, tables, charts or other visual aids to support your writing.',
  },
  {
    name: 'journalistic',
    value:
      'Use objective language and factual details to inform the reader. Be accurate and impartial and follow the inverted pyramid structure. Answer the who, what, when, where, why and how questions in the first paragraph.',
  },
  {
    name: 'poetic',
    value:
      'Use rhythmic and musical language to express feelings or ideas. Be creative\n    and imaginative\n    and follow\n    the patterns\n    of rhyme,\n    meter,\n    or form.\n    Provide\n    imagery,\n    sound,\n    or emotion\n    to enhance\n    your poem.',
  },
];

const LENGTH_OPTIONS = [
  {
    name: 'short',
    value: '320',
  },
  {
    name: 'medium',
    value: '1024',
  },
  {
    name: 'long',
    value: '3072',
  },
];

const RELATION_OPTIONS = [
  {
    name: 'friend',
    value:
      'You are talking to a close friend who knows you well and shares your interests and opinions.',
  },
  {
    name: 'colleague',
    value:
      'You are talking to a co-worker who you have a professional relationship with and who may have different views or expertise than you.',
  },
  {
    name: 'acquaintance',
    value:
      'You are talking to someone who you have met before but do not know very well and who may not share your background or perspective.',
  },
  {
    name: 'parent',
    value:
      'You are talking to your parent who cares about you and your well-being but may not be familiar with your current situation or preferences.',
  },
  {
    name: 'family',
    value:
      'You are talking to a relative who is part of your extended family and who may have some common history or values with you but may not know you personally.',
  },
];

function rand(max: number): number;
function rand(min: number, max: number): number;
function rand<T>(items: Array<T>): T;
function rand<T extends unknown>(arg0: T, arg1?: number): number | T {
  if (typeof arg0 === 'number') {
    const max = arg1 || arg0;
    const min = arg1 ? arg0 : 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else if (Array.isArray(arg0)) {
    const randomIndex = Math.floor(Math.random() * arg0.length);
    return arg0[randomIndex];
  } else {
    throw new Error('Invalid arguments');
  }
}

function App() {
  const [apikey, setApiKey] = useState('');
  const [input, setInput] = useState('');
  const [style, setStyle] = useState(WRITING_STYLES[0]);
  const [tone, setTone] = useState(TONE_OPTIONS[0]);
  // const [relation, setRelation] = useState(RELATION_OPTIONS[0]);
  const [output, setOutput] = useState('');
  const [format, setFormat] = useState('message');
  const [outputLength, setOutputLength] = useState(LENGTH_OPTIONS[0]);

  async function compose() {
    if (apikey.trim().length === 0 || input.trim().length === 0) return;
    const context = {
      role: 'system',
      content: generateContext({
        description: input,
        format,
        length: outputLength.name,
        style: style.name,
        tone: tone.name,
      }),
    };
    console.log(context);
    const description = { role: 'user', content: input };
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [context, description],
        max_tokens: parseInt(outputLength.value),
      }),
      method: 'POST',
    });

    if (response.ok) {
      const json = await response.json();
      setOutput(json.choices[0].message.content);
    } else {
      setOutput('There was an error. Try again later.');
    }
  }

  return (
    <div className="container">
      <InputBlur
        name="apikey"
        onChange={(e) => setApiKey(e.currentTarget.value)}
        value={apikey}
      />

      <InputArea
        value={input}
        onInput={(e) => setInput(e.currentTarget.value)}
        maxLength={2000}
        placeholder={`${format} description`}
        className="inputarea"
      />

      <FormatSelect
        format={format}
        onSelect={(f) => setFormat((prev) => (prev === f ? 'text' : f))}
      />
      <InputSection title="writing style" icon={<PenIcon />}>
        <OptionPicker
          options={WRITING_STYLES}
          picked={style}
          onChange={setStyle}
        />
      </InputSection>
      <InputSection title="tone" icon={<SpeakerIcon />}>
        <OptionPicker options={TONE_OPTIONS} picked={tone} onChange={setTone} />
      </InputSection>
      <InputSection title="length" icon={<FormatIcon />}>
        <OptionPicker
          options={LENGTH_OPTIONS}
          picked={outputLength}
          onChange={setOutputLength}
        />
      </InputSection>

      <button onClick={compose} className="compose">
        compose
      </button>
      <InputSection title="output" icon={<ArticleIcon />}>
        <InputArea
          disabled={output === ''}
          onInput={(e) => setOutput(e.currentTarget.value)}
          value={output}
          placeholder={`output will appear here`}
          className="inputarea"
          containerClass="outputarea"
        />
      </InputSection>
    </div>
  );
}

export default App;
