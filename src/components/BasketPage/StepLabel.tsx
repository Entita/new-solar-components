import { Group, Text } from '@mantine/core';

interface AccordionLabelProps {
  label: string;
  description?: string[];
}

export default function StepLabel({ label, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text>{label}</Text>
        {description && description.map((desc, idx) => (
          <Text key={idx} size="sm" c="dimmed" fw={400}>
            {desc}
          </Text>
        ))}
      </div>
    </Group>
  );
}