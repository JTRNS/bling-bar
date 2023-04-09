import IconOption from '../icon-option/icon-option';
import {
  ArticleIcon,
  ChatIcon,
  DocumentIcon,
  EmailIcon,
  ListIcon,
} from '../icons/icons';
import InputSection from '../input-section/input-section';

export default function FormatSelect({
  format,
  onSelect,
}: {
  format: string;
  onSelect: (format: string) => void | Promise<void>;
}) {
  const FORMAT_OPTIONS = {
    message: <ChatIcon />,
    document: <DocumentIcon />,
    email: <EmailIcon />,
    list: <ListIcon />,
    blogpost: <ArticleIcon />,
  };

  return (
    <InputSection title="format" icon={<DocumentIcon />}>
      {Object.entries(FORMAT_OPTIONS).map(([name, icon]) => (
        <IconOption
          label={name}
          icon={icon}
          selected={format === name}
          onClick={() => onSelect(name)}
        />
      ))}
    </InputSection>
  );
}
