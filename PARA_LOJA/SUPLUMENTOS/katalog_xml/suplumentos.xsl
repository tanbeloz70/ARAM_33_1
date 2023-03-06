<?xml version = "1.0" encoding = "UTF-8"?> 
   <xsl:stylesheet version = "1.0" 
      xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">	
   <xsl:template match = "catalog/category"> 
      <html>
        <head>
	  <title><xsl:value-of select="suplimento_name" /></title>
	</head>  
        <body>
          <div style='width:50%'><xsl:apply-templates select="suplimento_name" /></div>

                  <xsl:element name="IMG">
                   <xsl:attribute name="src">
                   <xsl:value-of select="@imj_jpg" /> </xsl:attribute>
                   <xsl:attribute name="title">
                   <xsl:apply-templates select="suplimento_name" /> </xsl:attribute>  
                    <xsl:attribute name="alt">
                   <xsl:apply-templates select="suplimento_name" /> </xsl:attribute>                               
                  </xsl:element>

           <div><xsl:apply-templates select="sena" /></div>
  <div><xsl:apply-templates select="Suplemento_Alimentar" /></div>  
<div><xsl:apply-templates select="Ingredientes" /></div>
  <div><xsl:apply-templates select="Alergenios" /></div> 
 <div><xsl:apply-templates select="Modo_de_Tomar" /></div>
<div><xsl:apply-templates select="Contem" /></div>
<div><xsl:apply-templates select="Apresentacao" /></div>
              
              </body> 
      </html> 
   </xsl:template>  
</xsl:stylesheet>