"use client";
import { XStack, YStack, Text, Button, Separator } from "tamagui";

export default function TamaguiTestPage() {
  return (
    <YStack f={1} ai="center" jc="center" gap="$4" p="$6" bg="$background" minHeight="100vh">
      <Text fontSize="$8" fontWeight="700" color="$color">
        Tamagui Test Page
      </Text>

      <Separator />

      <XStack gap="$3" flexWrap="wrap" jc="center">
        <Button size="$5" >Primary</Button>
        <Button size="$5" variant="outlined">Outlined</Button>
        <Button size="$5" disabled>Disabled</Button>
      </XStack>

      <XStack gap="$3" flexWrap="wrap" jc="center">
        <YStack p="$4" w={200} gap="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$3" bg="$background">
          <Text fontWeight="600" color="$color">Card Title</Text>
          <Text fontSize="$2" color="$colorHover">
            Design tokens이 적용된 카드 컴포넌트입니다.
          </Text>
        </YStack>

        <YStack p="$4" w={200} gap="$2" borderWidth={1} borderColor="$borderColorFocus" borderRadius="$3" bg="$backgroundFocus">
          <Text fontWeight="600" color="$color">Focus Theme</Text>
          <Text fontSize="$2" color="$colorHover">
            테마 색상이 적용된 카드 예시입니다.
          </Text>
        </YStack>
      </XStack>

      <YStack gap="$2" ai="center">
        <Text fontSize="$2" color="$placeholderColor">fontSize $2 (sm)</Text>
        <Text fontSize="$3" color="$placeholderColor">fontSize $3 (base)</Text>
        <Text fontSize="$4" color="$placeholderColor">fontSize $4 (lg)</Text>
        <Text fontSize="$5" color="$placeholderColor">fontSize $5 (xl)</Text>
      </YStack>
    </YStack>
  );
}
