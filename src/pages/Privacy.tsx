import { useTranslation } from 'react-i18next'

const PURPLE = '#6E6BB3'
const PURPLE_LIGHT = '#F5F3FF'
const PURPLE_BORDER = '#E5E0FF'

export default function Privacy() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #F5F3FF 0%, #EAE9F4 100%)',
        borderBottom: '1px solid #E5E0FF',
        padding: '80px 24px 48px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: `1px solid ${PURPLE_BORDER}`,
            borderRadius: 999, padding: '5px 14px', marginBottom: 20,
            fontSize: 13, fontWeight: 600, color: PURPLE,
          }}>
            🔒 {isEs ? 'Privacidad' : 'Privacy'}
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: '#111827', margin: '0 0 10px', letterSpacing: '-0.5px', lineHeight: 1.15 }}>
            {isEs ? 'Política de privacidad' : 'Privacy Policy'}
          </h1>
          <p style={{ fontSize: 15, color: '#6B7280', margin: '0 0 16px' }}>
            {isEs ? 'Última actualización: marzo 2026' : 'Last updated: March 2026'}
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, maxWidth: 620, margin: 0 }}>
            {isEs
              ? 'Volvé, desarrollada por Diego Maidana, respeta tu privacidad. Esta política explica qué datos recopilamos, cómo los usamos, con quién los compartimos y cuáles son tus derechos.'
              : 'Volvé, developed by Diego Maidana, respects your privacy. This policy explains what data we collect, how we use it, who we share it with, and what your rights are.'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '52px 24px 80px' }}>
        {isEs ? <PrivacyEs /> : <PrivacyEn />}
      </div>
    </div>
  )
}

// ── Sección reutilizable ─────────────────────────────────────────

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
        <div style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: 8,
          background: PURPLE_LIGHT, border: `1px solid ${PURPLE_BORDER}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: PURPLE, marginTop: 2,
        }}>
          {num}
        </div>
        <h2 style={{ fontSize: 19, fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.3 }}>
          {title}
        </h2>
      </div>
      <div style={{ paddingLeft: 46 }}>
        {children}
      </div>
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 12px' }}>
      {children}
    </p>
  )
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: '8px 0 12px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#374151', lineHeight: 1.65 }}>
          <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Callout({ icon, text }: { icon: string; text: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      background: PURPLE_LIGHT, border: `1px solid ${PURPLE_BORDER}`,
      borderRadius: 12, padding: '14px 16px', margin: '14px 0',
    }}>
      <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
      <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, margin: 0 }}>{text}</p>
    </div>
  )
}

function Table({ rows }: { rows: [string, string][] }) {
  return (
    <div style={{ borderRadius: 12, border: '1px solid #E5E7EB', overflow: 'hidden', margin: '12px 0' }}>
      {rows.map(([label, value], i) => (
        <div key={i} style={{
          display: 'flex', gap: 0,
          background: i % 2 === 0 ? '#FAFAFA' : '#fff',
          borderBottom: i < rows.length - 1 ? '1px solid #E5E7EB' : 'none',
        }}>
          <div style={{ width: '38%', padding: '11px 16px', fontSize: 13, fontWeight: 600, color: '#374151', borderRight: '1px solid #E5E7EB', flexShrink: 0 }}>
            {label}
          </div>
          <div style={{ flex: 1, padding: '11px 16px', fontSize: 13, color: '#6B7280', lineHeight: 1.5 }}>
            {value}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Español ──────────────────────────────────────────────────────

function PrivacyEs() {
  return (
    <div>
      <Section num="1" title="Datos que recopilamos">
        <P>Recopilamos únicamente los datos necesarios para que la app funcione y pueda enviarte alertas de emergencia.</P>
        <Table rows={[
          ['Email y nombre', 'Para crear y gestionar tu cuenta.'],
          ['Foto de perfil', 'Opcional. Se muestra en tu perfil y se envía a tus contactos en la alerta.'],
          ['Sesiones de seguridad', 'Información de la persona con quien te reunís: nombre, redes sociales, descripción, fotos, vestimenta.'],
          ['Lugares', 'Dirección y coordenadas de los lugares de encuentro que registrás.'],
          ['Contactos de emergencia', 'Nombre, teléfono y email de quienes recibirán tus alertas.'],
          ['Ubicación GPS', 'Puntos de ruta registrados durante una sesión activa con seguimiento en vivo.'],
          ['Códigos de seguridad', 'Almacenados SOLO en el Keychain de tu dispositivo. Nunca en la nube.'],
        ]} />
        <Callout icon="🔐" text={<><strong>Sobre los códigos:</strong> tu código seguro y código de coacción se guardan exclusivamente en el Keychain de iOS con protección <em>whenUnlockedThisDeviceOnly</em>. Ni Volvé ni nadie externo puede acceder a ellos.</>} />
      </Section>

      <Section num="2" title="Cómo usamos tus datos">
        <UL items={[
          <><strong>Autenticación:</strong> para verificar tu identidad y permitirte acceder a tu cuenta.</>,
          <><strong>Alertas de emergencia:</strong> cuando se dispara la alarma, enviamos la información de tu sesión (persona, ubicación, vestimenta) a tus contactos de emergencia vía WhatsApp y email.</>,
          <><strong>Historial:</strong> guardamos el registro de tus sesiones pasadas dentro de tu cuenta en Firestore.</>,
          <><strong>Mejoras:</strong> no analizamos el contenido de tus sesiones. Cualquier mejora futura se te comunicará con anticipación.</>,
        ]} />
        <P>No vendemos, alquilamos ni compartimos tus datos con terceros para fines publicitarios o comerciales.</P>
      </Section>

      <Section num="3" title="Terceros que intervienen">
        <P>Volvé utiliza los siguientes servicios externos, cada uno con su propia política de privacidad:</P>
        <Table rows={[
          ['Firebase / Google', 'Autenticación de usuarios, base de datos Firestore y almacenamiento de fotos. Datos alojados en servidores de Google.'],
          ['Twilio', 'Envío de mensajes de WhatsApp a tus contactos de emergencia cuando se dispara una alerta.'],
          ['Gmail (Google)', 'Envío de emails a tus contactos de emergencia cuando se dispara una alerta.'],
          ['Google Maps', 'Generación de mapas estáticos incluidos en los emails de alerta.'],
          ['Vercel', 'Hosting de la página de seguimiento en vivo que reciben tus contactos de emergencia.'],
          ['Apple (StoreKit)', 'Procesamiento de pagos para la suscripción premium. No almacenamos datos financieros.'],
        ]} />
        <P>Estos terceros solo reciben los datos estrictamente necesarios para cumplir su función (por ej., Twilio solo recibe el número de teléfono y el mensaje de alerta).</P>
      </Section>

      <Section num="4" title="Ubicación">
        <P>La app solicita permiso de ubicación durante sesiones activas para registrar los puntos de tu recorrido. <strong>Durante una sesión activa, la app puede registrar tu ubicación en segundo plano</strong> para garantizar el seguimiento continuo, incluso si la app se cierra o pasa a segundo plano.</P>
        <P>En caso de uso del código de coacción, la app continúa registrando ubicación durante un período adicional para proteger tu seguridad. Este comportamiento es intencional y forma parte del mecanismo de protección.</P>
        <P>Los enlaces de ubicación en vivo que se envían a tus contactos de emergencia <strong>expiran automáticamente 24 horas</strong> después de activarse la alerta.</P>
        <P>No rastreamos tu ubicación fuera de una sesión activa. Podés revocar el permiso en cualquier momento desde Configuración del sistema.</P>
      </Section>

      <Section num="5" title="Retención y eliminación">
        <P>Tus datos se conservan mientras tengas una cuenta activa. Podés eliminar tu cuenta y <strong>todos tus datos de forma permanente e irreversible</strong> desde Configuración → Eliminar cuenta.</P>
        <P>La eliminación incluye: documentos de Firestore (sesiones, contactos, perfil), fotos en Firebase Storage y el usuario de Firebase Auth.</P>
        <Callout icon="ℹ️" text="Los códigos guardados en el Keychain del dispositivo no se eliminan automáticamente al borrar la cuenta, ya que están fuera de los servidores de Volvé. Podés borrarlos eliminando la app de tu dispositivo." />
      </Section>

      <Section num="6" title="Suscripción premium y pagos">
        <P>Volvé ofrece una suscripción premium opcional con funciones adicionales. Los pagos se procesan exclusivamente a través de <strong>Apple (App Store)</strong>. No almacenamos datos de tarjetas de crédito, débito ni ninguna información financiera.</P>
        <P>Las políticas de reembolso de Apple aplican a todas las compras realizadas dentro de la app.</P>
      </Section>

      <Section num="7" title="Transferencias internacionales de datos">
        <P>Tus datos se almacenan en servidores de Google (Firebase) ubicados en Estados Unidos. Los mensajes de alerta se envían a través de Twilio (WhatsApp) y Gmail, cuyos servidores también se encuentran en EE.UU.</P>
      </Section>

      <Section num="8" title="Seguridad">
        <UL items={[
          'Todas las comunicaciones entre la app y Firebase van cifradas con TLS.',
          'Las reglas de seguridad de Firestore garantizan que solo el usuario autenticado puede leer y modificar sus propios documentos.',
          'Firebase App Check (App Attest en producción) protege los endpoints de Cloud Functions de accesos no autorizados.',
          'Los códigos de seguridad nunca viajan por la red y nunca se almacenan fuera del dispositivo.',
        ]} />
      </Section>

      <Section num="9" title="Privacidad de menores">
        <P>Volvé no está dirigida a personas menores de 13 años. No recopilamos intencionalmente datos de menores. Si creés que un menor registró una cuenta, escribinos a <a href="mailto:soporte@volve-app.com" style={{ color: PURPLE, textDecoration: 'none', fontWeight: 600 }}>soporte@volve-app.com</a> y eliminaremos la cuenta.</P>
      </Section>

      <Section num="10" title="Cambios en esta política">
        <P>Podemos actualizar esta política ante cambios en la app o requerimientos legales. Te notificaremos cambios importantes dentro de la app. La fecha de última actualización siempre estará visible al inicio de esta página.</P>
      </Section>

      <Section num="11" title="Contacto">
        <P>Para consultas sobre privacidad o para ejercer tus derechos de acceso, rectificación o eliminación de datos:</P>
        <P>📧 <a href="mailto:soporte@volve-app.com" style={{ color: PURPLE, fontWeight: 600, textDecoration: 'none' }}>soporte@volve-app.com</a></P>
      </Section>
    </div>
  )
}

// ── English ──────────────────────────────────────────────────────

function PrivacyEn() {
  return (
    <div>
      <Section num="1" title="Data we collect">
        <P>We only collect data necessary for the app to function and send emergency alerts.</P>
        <Table rows={[
          ['Email and name', 'To create and manage your account.'],
          ['Profile photo', 'Optional. Shown on your profile and included in emergency alerts.'],
          ['Safety sessions', 'Information about who you\'re meeting: name, socials, description, photos, outfit.'],
          ['Locations', 'Address and coordinates of meeting places you register.'],
          ['Emergency contacts', 'Name, phone and email of people who will receive your alerts.'],
          ['GPS location', 'Route points recorded during an active session with live tracking.'],
          ['Safety codes', 'Stored ONLY in your device\'s Keychain. Never in the cloud.'],
        ]} />
        <Callout icon="🔐" text={<><strong>About codes:</strong> your safe code and duress code are stored exclusively in iOS Keychain with <em>whenUnlockedThisDeviceOnly</em> protection. Neither Volvé nor any external party can access them.</>} />
      </Section>

      <Section num="2" title="How we use your data">
        <UL items={[
          <><strong>Authentication:</strong> to verify your identity and grant access to your account.</>,
          <><strong>Emergency alerts:</strong> when the alarm triggers, we send your session info (person, location, outfit) to your emergency contacts via WhatsApp and email.</>,
          <><strong>History:</strong> we store a record of your past sessions in your Firestore account.</>,
          <><strong>Improvements:</strong> we don't analyze the content of your sessions. Any future improvements will be communicated in advance.</>,
        ]} />
        <P>We do not sell, rent, or share your data with third parties for advertising or commercial purposes.</P>
      </Section>

      <Section num="3" title="Third-party services">
        <P>Volvé uses the following external services, each with their own privacy policy:</P>
        <Table rows={[
          ['Firebase / Google', 'User authentication, Firestore database and photo storage. Data hosted on Google servers.'],
          ['Twilio', 'Sending WhatsApp messages to your emergency contacts when an alert is triggered.'],
          ['Gmail (Google)', 'Sending emails to your emergency contacts when an alert is triggered.'],
          ['Google Maps', 'Generating static maps included in alert emails.'],
          ['Vercel', 'Hosting the live tracking page that your emergency contacts receive.'],
          ['Apple (StoreKit)', 'Payment processing for the premium subscription. We do not store financial data.'],
        ]} />
        <P>These third parties only receive the data strictly necessary to fulfill their function (e.g., Twilio only receives the phone number and alert message).</P>
      </Section>

      <Section num="4" title="Location">
        <P>The app requests location permission during active sessions to record your route points. <strong>During an active session, the app may record your location in the background</strong> to ensure continuous tracking, even if the app is closed or sent to the background.</P>
        <P>When a duress code is used, the app continues recording location for an additional period to protect your safety. This behavior is intentional and is part of the protection mechanism.</P>
        <P>Live location links sent to your emergency contacts <strong>automatically expire 24 hours</strong> after the alert is triggered.</P>
        <P>We do not track your location outside of an active session. You can revoke this permission at any time from system Settings.</P>
      </Section>

      <Section num="5" title="Retention and deletion">
        <P>Your data is kept while you have an active account. You can delete your account and <strong>all your data permanently and irreversibly</strong> from Settings → Delete account.</P>
        <P>Deletion includes: Firestore documents (sessions, contacts, profile), Firebase Storage photos, and the Firebase Auth user.</P>
        <Callout icon="ℹ️" text="Codes saved in the device Keychain are not automatically deleted when the account is deleted, as they are outside Volvé's servers. You can delete them by uninstalling the app from your device." />
      </Section>

      <Section num="6" title="Premium subscription and payments">
        <P>Volvé offers an optional premium subscription with additional features. Payments are processed exclusively through <strong>Apple (App Store)</strong>. We do not store credit card, debit card, or any financial information.</P>
        <P>Apple's refund policies apply to all purchases made within the app.</P>
      </Section>

      <Section num="7" title="International data transfers">
        <P>Your data is stored on Google (Firebase) servers located in the United States. Alert messages are sent through Twilio (WhatsApp) and Gmail, whose servers are also located in the U.S.</P>
      </Section>

      <Section num="8" title="Security">
        <UL items={[
          'All communications between the app and Firebase are encrypted with TLS.',
          'Firestore security rules ensure only the authenticated user can read and modify their own documents.',
          'Firebase App Check (App Attest in production) protects Cloud Function endpoints from unauthorized access.',
          'Safety codes never travel over the network and are never stored outside the device.',
        ]} />
      </Section>

      <Section num="9" title="Children's privacy">
        <P>Volvé is not directed at children under 13. We do not intentionally collect data from minors. If you believe a minor has registered an account, contact us at <a href="mailto:soporte@volve-app.com" style={{ color: PURPLE, textDecoration: 'none', fontWeight: 600 }}>soporte@volve-app.com</a> and we will delete the account.</P>
      </Section>

      <Section num="10" title="Changes to this policy">
        <P>We may update this policy due to app changes or legal requirements. We will notify you of significant changes within the app. The last updated date will always be visible at the top of this page.</P>
      </Section>

      <Section num="11" title="Contact">
        <P>For privacy inquiries or to exercise your rights of access, rectification, or data deletion:</P>
        <P>📧 <a href="mailto:soporte@volve-app.com" style={{ color: PURPLE, fontWeight: 600, textDecoration: 'none' }}>soporte@volve-app.com</a></P>
      </Section>
    </div>
  )
}
