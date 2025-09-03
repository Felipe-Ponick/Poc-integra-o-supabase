import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

export default function HomeScreen() {
  const { user } = useAuth();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    if (user) {
      fetchUserName();
    }
  }, [user]);

  const fetchUserName = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .single();

      if (data && data.name) {
        setUserName(data.name);
      } else {
        // Se não tem nome, usa o email como fallback
        setUserName(user.email?.split('@')[0] || '');
      }
    } catch (error) {
      console.error('Error fetching user name:', error);
      // Fallback para o email se houver erro
      setUserName(user.email?.split('@')[0] || '');
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CC0000', dark: '#000000' }}
      headerImage={
        <View style={styles.flamengoHeader}>
          <ThemedText style={styles.flamengoTitle}>FLAMENGO</ThemedText>
          <ThemedText style={styles.flamengoSubtitle}>Paixão Rubro-Negra</ThemedText>
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.welcomeText}>Flamengo</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>🏆 Clube de Regatas do Flamengo</ThemedText>
        <ThemedText style={styles.description}>
          Olá, {userName || 'Torcedor'}! Bem-vindo ao app oficial do Flamengo.
          Aqui você acompanha tudo sobre o Mengão.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>⚽ Nossa História</ThemedText>
        <ThemedText style={styles.description}>
          Fundado em 1895, o Flamengo é o clube do Zico, o Galinho de Quintino, 
          e de grandes ídolos que fizeram história no futebol mundial.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>🎯 Seu Perfil</ThemedText>
        <ThemedText style={styles.description}>
          Acesse a aba "Perfil" para personalizar suas informações e foto como torcedor rubro-negro.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>📱 História</ThemedText>
        <ThemedText style={styles.description}>
          Na aba "História" você encontra mais informações sobre o clube e suas conquistas.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
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
  welcomeText: {
    color: '#CC0000', // Vermelho do Flamengo
  },
  sectionTitle: {
    color: '#CC0000', // Vermelho do Flamengo
    fontWeight: 'bold',
  },
  description: {
    color: '#333333',
    lineHeight: 22,
  },
});