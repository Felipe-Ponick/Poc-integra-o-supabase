import { StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CC0000', dark: '#000000' }}
      headerImage={
        <View style={styles.flamengoHeader}>
          <ThemedText style={styles.flamengoTitle}>FLAMENGO</ThemedText>
          <ThemedText style={styles.flamengoSubtitle}>Paixão e Tradição</ThemedText>
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.exploreTitle}>História do Flamengo</ThemedText>
      </ThemedView>

      <ThemedText style={styles.introText}>
        Descubra mais sobre a rica história e conquistas do Clube de Regatas do Flamengo.
      </ThemedText>

      <Collapsible title="🏆 Principais Títulos">
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Copa Libertadores:</ThemedText> 3 títulos (1981, 2019, 2022)
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Mundial de Clubes:</ThemedText> 1 título (1981)
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Campeonato Brasileiro:</ThemedText> 8 títulos
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Copa do Brasil:</ThemedText> 4 títulos
        </ThemedText>
      </Collapsible>

      <Collapsible title="👑 Grandes Ídolos">
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Zico:</ThemedText> O Galinho de Quintino, maior ídolo da história
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Junior:</ThemedText> O Maestro, um dos maiores laterais do futebol
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Gabigol:</ThemedText> Artilheiro e ídolo de uma geração
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Adriano Imperador:</ThemedText> A força e o talento na Gávea
        </ThemedText>
      </Collapsible>

      <Collapsible title="🏟️ Maracanã">
        <ThemedText style={styles.collapsibleText}>
          O Estádio Jornalista Mário Filho, conhecido como Maracanã, é o palco de grandes jogos do Flamengo.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          Com capacidade para mais de 78.000 torcedores, é um dos maiores e mais icónicos estádios do mundo.
        </ThemedText>
        <ExternalLink href="https://www.flamengo.com.br/">
          <ThemedText type="link">Site Oficial do Flamengo</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="📅 Fundação e História">
        <ThemedText style={styles.collapsibleText}>
          O Clube de Regatas do Flamengo foi fundado em 17 de novembro de 1895 para competições de remo.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          O futebol foi introduzido em 1912 e rapidamente se tornou a principal modalidade do clube.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          O rubro-negro, com suas cores vermelho e preto, representa a paixão da torcida.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🎯 Curiosidades">
        <ThemedText style={styles.collapsibleText}>
          • O Flamengo tem a maior torcida do mundo, com milhões de adeptos espalhados pelo Brasil e pelo mundo.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • O hino do Flamengo é um dos mais populares e cantados do futebol brasileiro.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • O ano de 1981 é considerado o mais vitorioso da história do clube.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • A sigla CRF significa Clube de Regatas do Flamengo.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  flamengoHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC0000', // Vermelho do Flamengo
    paddingVertical: 40,
  },
  flamengoTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  flamengoSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8,
  },
  exploreTitle: {
    color: '#CC0000', // Título em vermelho
  },
  introText: {
    color: '#333333',
    marginBottom: 16,
    fontSize: 16,
  },
  collapsibleText: {
    color: '#333333',
    marginBottom: 8,
    lineHeight: 20,
  },
});