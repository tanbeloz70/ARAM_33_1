<?xml version = "1.0" encoding = "UTF-8"?> 
   <xsl:stylesheet version = "1.0" 
      xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">		
   <xsl:template match = "/"> 
      <html> 
         <body> 
          <xsl:for-each select = "catalog/category"> 
          <div><h3><xsl:value-of select = "@name"/></h3>
                <xsl:element name="IMG">
                   <xsl:attribute name="src">
                   <xsl:value-of select="@imj_jpg" />  </xsl:attribute>
                               
          </xsl:element>
              <h4><xsl:value-of select = "@sena"/></h4></div>
          </xsl:for-each>            
              </body> 
      </html> 
   </xsl:template>  
</xsl:stylesheet>